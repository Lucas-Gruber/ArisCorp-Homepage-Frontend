import { useSession } from 'next-auth/react'
import Layout from '../layout'
import { gql, useQuery } from '@apollo/client'
import { GET_GAMEPLAYS, INTERNAL_GET_Ships_MY_HANGAR } from 'graphql/queries'
import client from 'apollo/clients'
import { useEffect, useState } from 'react'
import SelectionGridWrapper from 'components/SelectionGridWrapper'
import HangarShipCard from 'components/internal/HangarShipCard'
import { BasicPanelButton } from 'components/panels'
import Modal from 'components/modal'
import MultipleCombobox from 'components/MultipleCombobox'
import Dropdown from 'components/Dropdown'
import RadioButton from 'components/RadioButton'
import { AnimatePresence, motion } from 'framer-motion'
import Head from 'next/head'
import DefaultButton from 'components/DefaultButton'
import Checkbox from 'components/Checkbox'
import { Tab } from '@headlessui/react'
import { useRouter } from 'next/router'

export async function getServerSideProps() {
  const { data } = await client.query({ query: INTERNAL_GET_Ships_MY_HANGAR })
  const { data: gameplayData } = await client.query({ query: GET_GAMEPLAYS })

  if (!data?.ships) {
    return {
      notFound: true,
    }
  }

  const ships = data.ships.sort((a, b) => a.name.localeCompare(b.name))
  const siteTitle = 'Mein Hangar - ArisCorp Management System'

  return {
    props: {
      shipList: ships,
      departments: gameplayData.gameplays,
      siteTitle,
    },
  }
}

export default function InternalIndex({ shipList, siteTitle, departments }) {
  const { data: session } = useSession()
  const [Data, setData] = useState()
  const [member, setMember] = useState('')
  const [detailView, setDetailView] = useState()
  const [loanerView, setLoanerView] = useState()
  const [modal, setModal] = useState(false)
  const [modalType, setModalType] = useState('')
  const [modalStore, setModalStore] = useState()
  const [selectedShips, setSelectedShips] = useState([])
  const [shipName, setShipName] = useState('')
  const [shipSerial, setShipSerial] = useState('')
  const [selectedGroup, setSelectedGroup] = useState('ariscorp')
  const [selectedVisibility, setSelectedVisibility] = useState('ariscorp')
  const [selectedDepartment, setSelectedDepartment] = useState()
  const [activeModule, setActiveModule] = useState()
  const [myShips, setMyShips] = useState()
  const [plannedCheckbox, setPlannedCheckbox] = useState()
  const [activeTab, setActiveTab] = useState()
  const [wishlist, setWishlist] = useState([])
  const { replace, query } = useRouter()

  const updateShips = async () => {
    if (member) {
      let rawData = await fetch(
        // "https://cms.ariscorp.de/items/member_ships?fields=*.*&filter[member_id]=" + session.user.id,
        'https://cms.ariscorp.de/items/member_ships?sort=ships_id.name&fields=*,department.*,active_module.id,active_module.name,active_module.slug,active_module.storeImage.id&filter[member_id]=' +
          member,
        {
          method: 'GET',
        }
      ).then((res) => res.json())
      let rawWishlistData = await fetch(
        // "https://cms.ariscorp.de/items/member_ships?fields=*.*&filter[member_id]=" + session.user.id,
        'https://cms.ariscorp.de/items/member_wishlist?sort=ships_id.name&fields=*&filter[member_id]=' +
          member,
        {
          method: 'GET',
        }
      ).then((res) => res.json())
      console.log(member)
      const data = []
      const wishlist = []

      rawData.data?.forEach((e) => {
        const obj = {
          id: e.id,
          ship_id: e.ships_id,
          custom_data: {
            name: e.name,
            serial: e.serial,
            group: e.group,
            department: e.department,
            visibility: e.visibility,
            active_module: e.active_module,
            planned: e.planned,
          },
        }
        data.push(obj)
      })
      rawWishlistData.data?.forEach((i) => {
        const object = {
          id: i.id,
          ship: shipList.find((e) => e.id == i.ships_id),
        }
        wishlist.push(object)
      })

      // Data.forEach((obj) => {
      //   const ship = shipList.find((e) => e.id == obj.ship_id)
      //   const item = {
      //     id: obj.id,
      //     ship,
      //     custom_data: obj.custom_data,
      //   }

      //   ships.push(item)
      // })

      setData(data)
      setWishlist(wishlist)
      return console.log('HANGAR UPDATED!')
    }
  }

  const getData = async () => {
    await session?.user
    if (session) {
      const memberData = await fetch(
        'https://cms.ariscorp.de/items/member?fields=id&filter[account]=' +
          session.user.id,
        {
          method: 'GET',
        }
      ).then((res) => res.json())
      setMember(await memberData.data[0].id)

      updateShips()
    }
  }

  useEffect(() => {
    if (!Data) {
      getData()
    }
  })

  useEffect(() => {
    // LOCAL STORAGE
    const detailViewValue = window.localStorage.getItem('hangarDetailView')
    if (detailViewValue != null && detailViewValue != 'undefined') {
      setDetailView(JSON.parse(detailViewValue))
    }
    const loanerViewValue = window.localStorage.getItem('hangarLoanerView')
    if (loanerViewValue != null && loanerViewValue != 'undefined') {
      setLoanerView(JSON.parse(loanerViewValue))
    }
  }, [])

  useEffect(() => {
    // LOCAL STORAGE
    window.localStorage.setItem('hangarDetailView', JSON.stringify(detailView))
  }, [detailView])

  useEffect(() => {
    // LOCAL STORAGE
    window.localStorage.setItem('hangarLoanerView', JSON.stringify(loanerView))
  }, [loanerView])

  const getMyShips = () => {
    let ships = []
    Data.forEach((obj) => {
      const ship = shipList.find((e) => e.id == obj.ship_id)
      const item = {
        id: obj.id,
        ship,
        custom_data: obj.custom_data,
      }

      ships.push(item)
    })
    if (loanerView) {
      const loanerViewShips = [
        ...ships.filter((e) => e.ship.productionStatus == 'flight-ready'),
      ]
      ships
        .filter((e) => e.ship.productionStatus != 'flight-ready')
        ?.forEach((obj) => {
          obj.ship?.loaners?.forEach((i) => {
            loanerViewShips.push(shipList.find((e) => e.id == i.id))
          })
        })
      ships = loanerViewShips.sort((a, b) =>
        (a.ship?.name || a.name).localeCompare(b.ship?.name || b.name)
      )
    }
    setMyShips(ships)
  }

  useEffect(() => {
    if (Data) {
      if (myShips) {
        setMyShips([])
        setTimeout(() => {
          getMyShips()
        }, 800)
      } else {
        getMyShips()
      }
    }
  }, [Data, loanerView])

  if (!Data) return <Layout>no data</Layout>

  const addShips = async (ships) => {
    if (!member) {
      return console.error('ERROR NO MEMBER')
    }
    const IDs = []
    const body = []
    ships.forEach((ship) => {
      const id = shipList.find((e) => e == ship).id
      IDs.push(id)
    })
    IDs.forEach((id) => {
      const item = {
        member_id: member,
        ships_id: id,
        group: 'ariscorp',
        visibility: 'internal',
      }

      body.push(item)
    })

    await fetch(
      'https://cms.ariscorp.de/items/member_ships?access_token=' +
        process.env.NEXT_PUBLIC_CMS_TOKEN,
      {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    closeModal()
    return updateShips()
  }
  const addWishlistShips = async (ships) => {
    if (!member) {
      return console.error('ERROR NO MEMBER')
    }
    const IDs = []
    const body = []
    ships.forEach((ship) => {
      const id = shipList.find((e) => e == ship).id
      IDs.push(id)
    })
    IDs.forEach((id) => {
      const item = {
        member_id: member,
        ships_id: id,
        group: 'ariscorp',
        visibility: 'internal',
      }

      body.push(item)
    })

    await fetch(
      'https://cms.ariscorp.de/items/member_wishlist?access_token=' +
        process.env.NEXT_PUBLIC_CMS_TOKEN,
      {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    closeModal()
    return updateShips()
  }

  function openEditModal(ship) {
    setModalType('editShip')
    setModalStore(ship)
    setShipName(ship.custom_data.name)
    setShipSerial(ship.custom_data.serial)
    if (ship.custom_data.group) {
      setSelectedGroup(ship.custom_data.group)
    }
    if (ship.custom_data.department) {
      setSelectedDepartment(
        departments.find((e) => e.id == ship.custom_data.department.id)
      )
    }
    if (ship.custom_data.visibility) {
      setSelectedVisibility(ship.custom_data.visibility)
    }
    if (ship.custom_data.active_module) {
      setActiveModule(
        ship.ship.modules.find((e) => e.id == ship.custom_data.active_module.id)
      )
    }
    setPlannedCheckbox(ship.custom_data.planned)
    setModal(true)
  }
  async function editShip(edits, id) {
    await fetch(
      `https://cms.ariscorp.de/items/member_ships/${id}?access_token=${process.env.NEXT_PUBLIC_CMS_TOKEN}`,
      {
        method: 'PATCH',
        body: JSON.stringify(edits),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    return
  }
  async function saveShipEdit() {
    console.log(
      `📝 ------SHIP EDIT - ${modalStore.ship.manufacturer.firmen_name} ${modalStore.ship.name}------`
    )

    const edits = {}
    if (shipName != modalStore.custom_data.name) {
      console.log('✏️ ---NAME---')
      console.log('OLD NAME: ' + modalStore.custom_data.name)
      console.log('NEW NAME: ' + shipName)

      edits.name = shipName
    }
    if (shipSerial != modalStore.custom_data.serial) {
      console.log('#️⃣ ---SERIAL---')
      console.log('OLD SERIAL: ' + modalStore.custom_data.serial)
      console.log('NEW SERIAL: ' + shipSerial)

      edits.serial = shipSerial
    }
    if (selectedGroup != modalStore.custom_data.group) {
      console.log('🏘️ ---GROUP---')
      console.log(
        'OLD GROUP: ' +
          (modalStore.custom_data.group == 'private'
            ? 'Private'
            : modalStore.custom_data.group == 'ariscorp' && 'ArisCorp')
      )
      console.log(
        'NEW GROUP: ' +
          (selectedGroup == 'private'
            ? 'Private'
            : selectedGroup == 'ariscorp' && 'ArisCorp')
      )

      edits.group = selectedGroup
    }
    if (selectedDepartment?.id != modalStore.custom_data.department?.id) {
      console.log('🏬 ---DEPARTENT---')
      console.log(
        'OLD DEPARTMENT: ' + modalStore.custom_data.department?.gameplay_name
      )
      console.log('NEW DEPARTMENT: ' + selectedDepartment?.gameplay_name)

      edits.department = selectedDepartment?.id || null
    }
    if (selectedVisibility != modalStore.custom_data.visibility) {
      console.log('👀 ---VISIBILITY---')
      console.log(
        'OLD VISIBILITY: ' +
          (modalStore.custom_data.visibility == 'public'
            ? 'Öffentlich'
            : modalStore.custom_data.visibility == 'internal'
            ? 'Intern'
            : modalStore.custom_data.visibility == 'hidden' && 'Versteckt')
      )
      console.log(
        'NEW VISIBILITY: ' +
          (selectedVisibility == 'public'
            ? 'Öffentlich'
            : selectedVisibility == 'internal'
            ? 'Intern'
            : selectedVisibility == 'hidden' && 'Versteckt')
      )

      edits.visibility = selectedVisibility
    }
    if (activeModule != modalStore.custom_data.active_module) {
      console.log('🧩 ---ACTIVE MODULE---')
      console.log(
        'OLD ACTIVE MODULE: ' + modalStore.custom_data.active_module?.name ||
          'N/A'
      )
      console.log('NEW ACTIVE MODULE: ' + activeModule.name)

      edits.active_module = activeModule.id
    }
    if (plannedCheckbox != modalStore.custom_data.planned) {
      console.log('📃 ---PLANNED STATE---')
      console.log('OLD PLANNED STATE: ' + modalStore.custom_data.planned)
      console.log('NEW PLANNED STATE: ' + plannedCheckbox)

      edits.planned = plannedCheckbox
    }

    console.log('📑 ---EDIT-OBJECT:---')
    console.log(edits)
    await editShip(edits, modalStore.id)
    closeModal()
    return updateShips()
  }
  function openAddModal() {
    setModalType('addShips')
    setModal(true)
  }
  function openWishlistAddModal() {
    setModalType('addWishlistShips')
    setModal(true)
  }
  function openRemoveModal(ship) {
    setModalStore(ship)
    setModalType('removeShip')
    setModal(true)
  }
  function openWishlistRemoveModal(ship) {
    setModalStore(ship)
    setModalType('removeWishlistShip')
    setModal(true)
  }
  function openHelpModal() {
    setModalType('help')
    setModal(true)
  }
  async function removeShip() {
    await fetch(
      `https://cms.ariscorp.de/items/member_ships/${modalStore.id}?access_token=${process.env.NEXT_PUBLIC_CMS_TOKEN}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    closeModal()
    await updateShips()
    return
  }
  async function removeWishlistShip() {
    await fetch(
      `https://cms.ariscorp.de/items/member_wishlist/${modalStore.id}?access_token=${process.env.NEXT_PUBLIC_CMS_TOKEN}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    closeModal()
    await updateShips()
    return
  }
  function closeModal() {
    setModal(false)
    setTimeout(() => {
      setModalType('')
      setModalStore()
      setShipName()
      setShipSerial()
      setSelectedGroup()
      setSelectedDepartment()
      setSelectedVisibility()
      setSelectedShips([])
      setActiveModule()
      setPlannedCheckbox()
    }, 600)
  }
  return (
    <Layout helpAction={openHelpModal}>
      <Head>
        <title>{siteTitle}</title>

        <meta property="twitter:title" content={siteTitle} />
        <meta property="og:title" content={siteTitle} />
        <meta name="title" content={siteTitle} />
      </Head>
      <Modal
        state={modal}
        setState={setModal}
        title={
          (modalType == 'addShips' && 'Schiffe hinzufügen') ||
          (modalType == 'addWishlistShips' &&
            'Schiffe zur Wunschliste hinzufügen') ||
          (modalType == 'editShip' &&
            'Bearbeiten: ' +
              (modalStore?.custom_data?.name
                ? `"${modalStore?.custom_data?.name}"`
                : (modalStore?.ship?.manufacturer.firmen_name.split(' ')
                    .length > 2
                    ? modalStore?.ship?.manufacturer.code
                    : modalStore?.ship?.manufacturer.firmen_name.split(
                        ' '
                      )[0]) +
                  ' ' +
                  modalStore?.ship?.name)) ||
          (modalType == 'removeShip' &&
            'Entfernen: ' +
              (modalStore?.custom_data?.name
                ? `"${modalStore?.custom_data?.name}"`
                : (modalStore?.ship?.manufacturer.firmen_name.split(' ')
                    .length > 2
                    ? modalStore?.ship?.manufacturer.code
                    : modalStore?.ship?.manufacturer.firmen_name.split(
                        ' '
                      )[0]) +
                  ' ' +
                  modalStore?.ship?.name)) ||
          (modalType == 'removeWishlistShip' &&
            'Entfernen: ' +
              modalStore.ship.manufacturer.firmen_name +
              ' ' +
              modalStore?.name +
              ' von der Wunschliste') ||
          (modalType == 'help' && 'Hilfe:')
        }
        closeFunction={closeModal}
        wxxl={modalType == 'help' ? true : false}
      >
        <div className="mb-2">
          {modalType == 'addShips' && (
            <div className="flex flex-wrap justify-center">
              <MultipleCombobox
                multiple
                items={shipList}
                state={selectedShips}
                setState={setSelectedShips}
              />
              <div className="w-full mt-4 space-x-12">
                <DefaultButton animate danger action={() => closeModal()}>
                  Abbruch
                </DefaultButton>
                <DefaultButton
                  animate
                  agree
                  action={() => (closeModal, addShips(selectedShips))}
                >
                  Hinzufügen!
                </DefaultButton>
              </div>
            </div>
          )}
          {modalType == 'addWishlistShips' && (
            <div className="flex flex-wrap justify-center">
              <MultipleCombobox
                multiple
                items={shipList}
                state={selectedShips}
                setState={setSelectedShips}
              />
              <div className="w-full mt-4 space-x-12">
                <DefaultButton animate danger action={() => closeModal()}>
                  Abbruch
                </DefaultButton>
                <DefaultButton
                  animate
                  agree
                  action={() => (closeModal, addWishlistShips(selectedShips))}
                >
                  Hinzufügen!
                </DefaultButton>
              </div>
            </div>
          )}
          {modalType == 'editShip' && (
            <div className="px-8">
              <div className="mt-6">
                <p className="w-full -ml-4 text-base text-left">Basis Daten:</p>
                <div className="flex justify-between mb-3 space-x-4">
                  <label className="my-auto text-xl">Name:</label>
                  <input
                    value={shipName}
                    onChange={(e) => setShipName(e.target.value)}
                    placeholder="Name..."
                    className="form-control block w-full max-w-[286px] px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none"
                  />
                </div>
                <div className="flex justify-between space-x-4">
                  <label className="my-auto text-xl">S/N:</label>
                  <input
                    value={shipSerial}
                    onChange={(e) => setShipSerial(e.target.value)}
                    placeholder="Seriennummer..."
                    className="form-control w-full block max-w-[286px] px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none"
                  />
                </div>
              </div>
              <div className="mt-6">
                <p className="w-full -ml-4 text-base text-left">Einteilung:</p>
                <div className="flex">
                  <div className="flex my-auto mr-auto space-x-4">
                    <div onClick={() => setSelectedDepartment()}>
                      <RadioButton
                        state={selectedGroup}
                        setState={setSelectedGroup}
                        id="c-1"
                        color="secondary"
                        bg="[#111]"
                        name="group"
                        value="private"
                      >
                        <RadioButton.Label>Privat</RadioButton.Label>
                        <RadioButton.Indicator />
                      </RadioButton>
                    </div>
                    <div>
                      <RadioButton
                        state={selectedGroup}
                        setState={setSelectedGroup}
                        id="c-2"
                        color="primary"
                        bg="[#111]"
                        name="group"
                        value="ariscorp"
                      >
                        <RadioButton.Label>ArisCorp</RadioButton.Label>
                        <RadioButton.Indicator />
                      </RadioButton>
                    </div>
                  </div>
                  <div className="w-full ml-4">
                    <Dropdown
                      items={departments}
                      state={selectedDepartment}
                      setState={setSelectedDepartment}
                      mode="departments"
                      disabled={selectedGroup == 'private' && true}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap w-full mt-6">
                <p className="w-full -ml-4 text-base text-left">
                  Sichtbarkeit:
                </p>
                <div className="mx-auto">
                  <div className="flex my-auto space-x-4">
                    <div className="ml-auto">
                      <RadioButton
                        state={selectedVisibility}
                        setState={setSelectedVisibility}
                        id="c-4"
                        color="green-500"
                        bg="[#111]"
                        name="visibility"
                        value="public"
                      >
                        <RadioButton.Label>Öffentlich</RadioButton.Label>
                        <RadioButton.Indicator />
                      </RadioButton>
                    </div>
                    <div className="ml-auto">
                      <RadioButton
                        state={selectedVisibility}
                        setState={setSelectedVisibility}
                        id="c-3"
                        color="primary"
                        bg="[#111]"
                        name="visibility"
                        value="internal"
                      >
                        <RadioButton.Label>Nur Intern</RadioButton.Label>
                        <RadioButton.Indicator />
                      </RadioButton>
                    </div>
                    <div className="ml-auto">
                      <RadioButton
                        state={selectedVisibility}
                        setState={setSelectedVisibility}
                        id="c-5"
                        color="secondary"
                        bg="[#111]"
                        name="visibility"
                        value="hidden"
                      >
                        <RadioButton.Label>Versteckt</RadioButton.Label>
                        <RadioButton.Indicator />
                      </RadioButton>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <p className="w-full -ml-4 text-base text-left">
                  Spezifische Informationen:
                </p>
                <div className="flex justify-between mb-3 space-x-4">
                  <label className="my-auto text-base">Planung:</label>
                  <div className="w-full max-w-[286px]">
                    <Checkbox
                      state={plannedCheckbox}
                      setState={setPlannedCheckbox}
                      id="c-6"
                      color="primary"
                      bg="[#111]"
                    >
                      <Checkbox.Label>Schiff erst Geplant?</Checkbox.Label>
                      <Checkbox.Indicator />
                    </Checkbox>
                  </div>
                </div>
                {modalStore.ship.modules[0] && (
                  <div className="flex justify-between mb-3 space-x-4">
                    <label className="my-auto text-base">Aktives Modul:</label>
                    <div className="w-full max-w-[286px]">
                      <Dropdown
                        items={modalStore.ship.modules}
                        state={activeModule}
                        setState={setActiveModule}
                        mode="module"
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className="w-full mt-8 space-x-12">
                <DefaultButton animate danger action={() => closeModal()}>
                  Abbruch
                </DefaultButton>
                <DefaultButton animate agree action={() => saveShipEdit()}>
                  Speichern!
                </DefaultButton>
              </div>
            </div>
          )}
          {modalType == 'removeShip' && (
            <div>
              <h3>
                Bist du sicher, das du dieses Schiff aus deinem Hangar entfernen
                möchtest?
              </h3>
              <div className="w-full mt-8 space-x-12">
                <DefaultButton animate danger action={closeModal}>
                  Nein!
                </DefaultButton>
                <DefaultButton animate agree action={removeShip}>
                  Ja!
                </DefaultButton>
              </div>
            </div>
          )}
          {modalType == 'removeWishlistShip' && (
            <div>
              <h3>
                Bist du sicher, das du dieses Schiff von der Wunschliste
                entfernen möchtest?
              </h3>
              <div className="w-full mt-8 space-x-12">
                <DefaultButton animate danger action={closeModal}>
                  Nein!
                </DefaultButton>
                <DefaultButton animate agree action={removeWishlistShip}>
                  Ja!
                </DefaultButton>
              </div>
            </div>
          )}
          {modalType == 'help' && (
            <div className="px-8">
              {(activeTab == 0 || !activeTab) && (
                <div>
                  <div>
                    <p>Hier kannst du deinen Hangar anpassen.</p>
                    <p>Klicke einfach auf &quot;Schiffe hinzufügen&quot; und wähle ein Schiff aus. Du kannst entweder nach dem Namen suchen oder es in der Liste suchen.</p>
                    <p>Sie können ihr Schiff bearbeiten, in dem sie auf das Stift-Symbol in der rechten, unteren Ecke klicken.</p>
                    <p>Bitte beachte folgende Dinge:</p>
                    <ul>
                      <li>
                        Wenn du ein Schiff erstellst wird es Standardmäßig der
                        ArisCorp-Flotte zugeordnet und nur Intern angezeigt.
                      </li>
                      <li>Aktuell werden Schiffsnamen immer angezeigt.</li>
                      <li className="mt-2">
                        Bitte füge nur Schiffe hinzu, die aktuell wirklich in
                        deinem Hangar sind.
                      </li>
                      <li>
                        <strong>
                          Bitte füge keine Loaner hinzu, dafür gibt es die
                          Leihschiff-Ansicht!
                        </strong>
                      </li>
                      <li>
                        Wenn ein Schiff fest geplant ist, stelle es bitte auf
                        &quot;geplant&quot; damit dies auch so angezeigt wird.
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              {activeTab == 1 && (
                <div>
                  <div>
                    <p>Hier kannst du deine Wunschliste anpassen.</p>
                    <p>Klicke einfach auf &quot;Schiffe hinzufügen&quot; und wähle ein Schiff aus. Du kannst entweder nach dem Namen suchen oder es in der Liste suchen.</p>
                    <p>Bitte beachte folgende Dinge:</p>
                    <ul>
                      <li>
                        Deine Wunschliste ist nur für dich Sichtbar.
                      </li>
                      <li>
                        Du kannst aktuell nur Schiffe und Fahrzeuge zur Wunschliste hinzufügen. (Keine Module oder andere Gegenstände)
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              <div className="w-full mt-8 space-x-12">
                <DefaultButton
                  animate
                  danger
                  action={() => closeModal()}
                >
                  Schließen!
                </DefaultButton>
              </div>
            </div>
          )}
        </div>
      </Modal>
      <Tab.Group
        selectedIndex={activeTab}
        onChange={(event) =>
          replace({ query: { tab: event } }, undefined, { shallow: true }) +
          setActiveTab(event)
        }
      >
        <Tab.List className="flex flex-wrap justify-between mt-6">
          <Tab
            className={({ selected }) =>
              (selected ? 'text-primary' : 'opacity-50') +
              ' focus-visible:outline-none p-3 m-1 transition-all duration-300 ease-in-out'
            }
          >
            <h1 className="text-base font-normal font-base md:text-lg lg:text-2xl xl:text-3xl text-inherit">
              Hangar
            </h1>
          </Tab>
          <Tab
            className={({ selected }) =>
              (selected ? 'text-primary' : 'opacity-50') +
              ' focus-visible:outline-none p-3 m-1 transition-all duration-300 ease-in-out'
            }
          >
            <h1 className="text-base font-normal font-base md:text-lg lg:text-2xl xl:text-3xl text-inherit">
              Wunschliste
            </h1>
          </Tab>
          <hr />
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <div className="w-full h-full">
              <div className="flex flex-wrap px-2 my-4 gap-y-4">
                <div className="flex flex-wrap gap-4 ml-auto">
                  <div>
                    <BasicPanelButton
                      animate
                      className="ml-auto w-fit"
                      onClick={openAddModal}
                    >
                      <p className="p-0">Schiffe Hinzufügen</p>
                    </BasicPanelButton>
                  </div>
                  <div>
                    <BasicPanelButton
                      animate
                      onClick={() => setDetailView(!detailView)}
                    >
                      <p className="p-0">
                        Detail Ansicht:{' '}
                        {detailView ? 'Ausschalten' : 'Anschalten'}
                      </p>
                    </BasicPanelButton>
                  </div>
                  <div>
                    <BasicPanelButton
                      animate
                      onClick={() => setLoanerView(!loanerView)}
                    >
                      <p className="p-0">
                        Leihschiff-Ansicht:{' '}
                        {loanerView ? 'Ausschalten' : 'Anschalten'}
                      </p>
                    </BasicPanelButton>
                  </div>
                </div>
              </div>
              <SelectionGridWrapper>
                <AnimatePresence>
                  {myShips?.map((object) => (
                    <motion.div
                      key={object.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      exit={{ opacity: 0 }}
                    >
                      <HangarShipCard
                        color={
                          !loanerView
                            ? object.custom_data?.group == 'private'
                              ? 'white'
                              : object.custom_data?.group == 'ariscorp' &&
                                object.custom_data?.department
                              ? 'primary'
                              : object.custom_data?.group == 'ariscorp' &&
                                !object.custom_data?.department
                              ? 'secondary'
                              : null
                            : null
                        }
                        editAction={() => openEditModal(object)}
                        removeAction={() => openRemoveModal(object)}
                        detailView={detailView}
                        data={object}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </SelectionGridWrapper>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="w-full h-full">
              <div className="flex flex-wrap px-2 my-4 gap-y-4">
                <div className="flex flex-wrap gap-4 ml-auto">
                  <div>
                    <BasicPanelButton
                      animate
                      className="ml-auto w-fit"
                      onClick={openWishlistAddModal}
                    >
                      <p className="p-0">Schiffe Hinzufügen</p>
                    </BasicPanelButton>
                  </div>
                  <div>
                    <BasicPanelButton
                      animate
                      onClick={() => setDetailView(!detailView)}
                    >
                      <p className="p-0">
                        Detail Ansicht:{' '}
                        {detailView ? 'Ausschalten' : 'Anschalten'}
                      </p>
                    </BasicPanelButton>
                  </div>
                </div>
              </div>
              <SelectionGridWrapper>
                <AnimatePresence>
                  {wishlist?.map((object) => (
                    <motion.div
                      key={object.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      exit={{ opacity: 0 }}
                    >
                      <HangarShipCard
                        removeAction={() => openWishlistRemoveModal(object)}
                        detailView={detailView}
                        data={object}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </SelectionGridWrapper>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      {/* <div onClick={() => addShips(["vulture", "carrack"])} className='absolute bottom-0 cursor-pointer right-12'>+</div> */}
      {/* <div className='sticky flex w-full bottom-8 z-[99]'>
        <div className='ml-auto mr-4'>
          <AiOutlinePlusCircle onClick={openAddModal} className='w-12 h-12 transition-all duration-200 cursor-pointer hover:text-primary hover:duration-300' />
        </div>
      </div> */}
    </Layout>
  )
}
