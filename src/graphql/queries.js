const { gql } = require('@apollo/client')
// Hier werden alle Queries gespeichert und Exportiert

// INDEX QUERYS
export const GET_INDEX_THE_ARISCORP = gql`
  query GetTheArisCorp {
    die_ariscorp {
      text
    }
  }
`

export const GET_INDEX_ARISCORP_HISTORY = gql`
  query GetArisCorpHistory {
    ariscorp_history {
      text
    }
  }
`

export const GET_INDEX_ARISCORP_MANIFEST = gql`
  query GetArisCorpManifest {
    manifest {
      text
    }
  }
`

export const GET_INDEX_ARISCORP_CHARTA = gql`
  query GetArisCorpCharta {
    charta {
      text
    }
  }
`

export const GET_INDEX_ARISCORP_COMM_LINKS = gql`
  query GetIndexCommLinks {
    comm_links(
      filter: { status: { _eq: "published" } }
      sort: ["-date_created"]
      limit: 4
    ) {
      id
      status
      comm_link_titel
      comm_link_banner {
        id
      }
      comm_link_beschreibung
      comm_link_channel {
        channel
        beschreibung
      }
    }
  }
`

export const GET_INDEX_PARTNERS = gql`
  query GetPartner {
    partner(filter: { status: { _eq: "published" } }) {
      id
      partner_name
      partner_logo {
        id
      }
      partner_website
      date_created
    }
  }
`

export const GET_INDEX_DATA = gql`
  query GetIndexData {
    die_ariscorp {
      text
    }
    ariscorp_history {
      text
    }
    manifest {
      text
    }
    charta {
      text
    }
    comm_links(
      filter: { status: { _eq: "published" } }
      sort: ["-date_created"]
      limit: 4
    ) {
      id
      status
      comm_link_titel
      comm_link_banner {
        id
      }
      date_created
      comm_link_author {
        member_titel
      }
      comm_link
      comm_link_beschreibung
      comm_link_channel {
        channel
        beschreibung
      }
      date_created
    }
    partner(filter: { status: { _eq: "published" } }) {
      id
      partner_name
      partner_logo {
        id
      }
      partner_website
      date_created
    }
  }
`

// MEMBER QUERYS
export const GET_MEMBERS = gql`
  query GetMembers {
    member(
      filter: { status: { _eq: "published" } }
      sort: ["sort", "member_name"]
      limit: -1
    ) {
      id
      status
      member_name
      member_titel
      member_rollen
      member_potrait {
        id
      }
    }
  }
`

export const GET_MEMBER = gql`
  query GetMember($name: String!) {
    member(
      filter: { member_name: { _eq: $name } }
      sort: ["sort", "member_name"]
    ) {
      id
      status
      member_name
      member_titel
      member_potrait {
        id
      }
      member_biografie
      member_steckbrief
    }
  }
`

// GAMEPLAY QUERYS
export const GET_GAMEPLAYS = gql`
  query GetGameplays {
    gameplays(
      filter: { status: { _eq: "published" } }
      sort: ["sort", "id"]
      limit: -1
    ) {
      id
      status
      gameplay_name
      gameplay_logo {
        id
      }
      gameplay_bild_links {
        id
      }
      gameplay_bild_rechts {
        id
      }
      text
    }
  }
`

// COMM-LINK QUERYS
export const GET_COMM_LINKS = gql`
  query GetCommLinks($queryChannel: String!, $squery: String = "") {
    comm_links(
      filter: {
        comm_link_channel: { channel: { _contains: $queryChannel } }
        status: { _eq: "published" }
      }
      search: $squery
      sort: ["-date_created"]
      limit: -1
    ) {
      id
      status
      comm_link_titel
      comm_link_banner {
        id
      }
      comm_link_author {
        member_titel
      }
      comm_link
      comm_link_beschreibung
      comm_link_channel {
        id
        channel
        beschreibung
        unavailable
      }
      date_created
    }
  }
`

export const GET_COMM_LINK = gql`
  query GetCommLink($Id: String!) {
    comm_links(filter: { id: { _eq: $Id } }) {
      id
      status
      comm_link_titel
      comm_link_banner {
        id
        height
        width
      }
      comm_link_author {
        member_titel
        member_potrait {
          id
        }
      }
      comm_link
      comm_link_beschreibung
      comm_link_channel {
        channel
        beschreibung
      }
      date_created
    }
  }
`

// CREDITS QUERYS
export const GET_CREDITS = gql`
  query GetCredits {
    credits {
      id
      status
      text
    }
  }
`

// VERSEEXKURS QUERYS
export const GET_VEXKURS_INDEX = gql`
  query GetVerseExkursIndex {
    exkurs_index {
      text
    }
  }
`

export const GET_VERSEEXKURS_TIMELINE = gql`
  query GetVerseExkursTimeline {
    timeline {
      event
    }
  }
`

export const GET_VERSEEXKURS_ONEDAYINHISTORY_KATEGORIES = gql`
  query GetVerseExkursOneDayInHistoryKategories {
    geschichte(
      filter: {
        status: { _eq: "published" }
        geschichte_kategorie: { _eq: true }
      }
      limit: -1
    ) {
      id
      geschichte_titel
      geschichte_auswahlbild {
        id
        width
        height
      }
      geschichte_datum
      geschichte_kategorie
      geschichte_beschreibung
    }
  }
`

export const GET_VERSEEXKURS_ONEDAYINHISTORY_ARTICLE = gql`
  query GetVerseExkursOneDayInHistoryArticle($title: String!) {
    geschichte(
      filter: {
        status: { _eq: "published" }
        geschichte_titel: { _eq: $title }
      }
    ) {
      id
      geschichte_titel
      geschichte_auswahlbild {
        id
        width
        height
      }
      geschichte_datum
      geschichte_kategorie
      geschichte_beschreibung
      text
    }
  }
`

export const GET_VERSEEXKURS_UEE = gql`
  query GetVerseExkursUEE {
    united_empire_of_earth {
      id
      title
      image {
        id
        width
        height
      }
      text
      sections
      feiertage
    }
  }
`

export const GET_VERSEEXKURS_SYSTEME = gql`
  query GetVerseExkursSysteme {
    systeme(
      filter: { status: { _eq: "published" }, is_system: { _eq: true } }
      limit: -1
    ) {
      id
      status
      name
      banner {
        id
        width
        height
      }
      star_type
      star_class
      size
      planets
      moons
      asteroid_belt
      jumppoints
      affiliation
      discovery_year
      main_planet
      population
      economy
      danger_level
    }
  }
`

export const GET_VERSEEXKURS_SYSTEM = gql`
  query GetVerseExkursSystem($System: String!) {
    systeme(filter: { status: { _eq: "published" }, name: { _eq: $System } }) {
      id
      status
      name
      banner {
        id
        width
        height
      }
      text
      star_type
      star_class
      size
      planets
      moons
      asteroid_belt
      jumppoints
      affiliation
      discovery_year
      main_planet
      population
      economy
      danger_level
    }
  }
`

export const GET_VERSEEXKURS_ALIENRASSEN = gql`
  query GetVerseExkursAlienrassen {
    alienrassen(filter: { status: { _eq: "published" } }, limit: -1) {
      id
      alienrassen_name
      alienrassen_banner {
        id
        width
        height
      }
      text
      sections
    }
  }
`

export const GET_VERSEEXKURS_ALIENRASSE = gql`
  query GetVerseExkursAlienrasse($alienrasse: String!) {
    alienrassen(filter: { alienrassen_name: { _eq: $alienrasse } }) {
      id
      alienrassen_name
      alienrassen_banner {
        id
        width
        height
      }
      text
      sections
    }
  }
`

export const GET_VERSEEXKURS_BIESTARIUM = gql`
  query GetVerseExkursBiestarium {
    alienrassen(filter: { alienrassen_name: { _eq: "Biestarium" } }) {
      id
      alienrassen_name
      alienrassen_banner {
        id
        width
        height
      }
      text
      sections
    }
  }
`

export const GET_VERSEEXKURS_PFLANZEN = gql`
  query GetVerseExkursPflanzen {
    alienrassen(filter: { alienrassen_name: { _eq: "Pflanzen" } }, limit: -1) {
      id
      alienrassen_name
      alienrassen_banner {
        id
        width
        height
      }
      text
      sections
    }
  }
`

export const GET_VERSEEXKURS_FIRMEN = gql`
  query GetVerseExkursFirmen {
    firmen(filter: { status: { _eq: "published" } }, limit: -1) {
      id
      status
      firmen_trans_logo {
        id
        width
        height
      }
      firmen_banner {
        id
        width
        height
      }
      firmen_name
      firmenkategorie
      firmenherstellerkategorie
      firmenpersonenasrustungsherstellerkategorie
      othercategory
      medicinecategory
    }
  }
`

export const GET_VERSEEXKURS_FIRMA = gql`
  query GetVerseExkursFirma($firma: String!) {
    firmen(
      filter: { status: { _eq: "published" }, firmen_name: { _eq: $firma } }
    ) {
      id
      status
      firmen_trans_logo {
        id
        width
        height
      }
      firmen_banner {
        id
        width
        height
      }
      firmen_name
      firmenkategorie
      firmenherstellerkategorie
      text
      headquarter
      current_ceo
      founding
      founder
      famous_goods
    }
  }
`

export const GET_VERSEEXKURS_FRAKTIONEN = gql`
  query GetVerseExkursFraktion {
    fraktionengruppierungen(filter: { status: { _eq: "published" } }) {
      id
      status
      trans_logo {
        id
        width
        height
      }
      banner {
        id
        width
        height
      }
      name
      category
      text
    }
  }
`

export const GET_VERSEEXKURS_FRAKTION = gql`
  query GetVerseExkursFraktion($fraktion: String!) {
    fraktionengruppierungen(
      filter: { status: { _eq: "published" }, name: { _eq: $fraktion } }
      limit: -1
    ) {
      id
      status
      trans_logo {
        id
        width
        height
      }
      banner {
        id
        width
        height
      }
      name
      category
      text
    }
  }
`

export const GET_VERSEEXKURS_FIRMEN_HERSTELLER = gql`
  query GetVerseExkursFirmenHersteller {
    firmen(
      filter: {
        status: { _eq: "published" }
        firmenkategorie: { _eq: "hersteller" }
      }
      limit: -1
    ) {
      id
      status
      firmen_trans_logo {
        id
        width
        height
      }
      firmen_banner {
        id
        width
        height
      }
      firmen_name
      firmenkategorie
      firmenherstellerkategorie
      text
    }
  }
`

export const GET_VERSEEXKURS_FIRMEN_DIENSTLEISTER = gql`
  query GetVerseExkursFirmenDienstleister {
    firmen(
      filter: {
        status: { _eq: "published" }
        firmenkategorie: { _eq: "dienstleister" }
      }
      limit: -1
    ) {
      id
      status
      firmen_trans_logo {
        id
        width
        height
      }
      firmen_banner {
        id
        width
        height
      }
      firmen_name
      firmenkategorie
      firmenherstellerkategorie
      text
    }
  }
`

export const GET_VERSEEXKURS_FIRMEN_SHOPS = gql`
  query GetVerseExkursFirmenShops {
    firmen(
      filter: {
        status: { _eq: "published" }
        firmenkategorie: { _eq: "geschäfte" }
      }
      limit: -1
    ) {
      id
      status
      firmen_trans_logo {
        id
        width
        height
      }
      firmen_banner {
        id
        width
        height
      }
      firmen_name
      firmenkategorie
      firmenherstellerkategorie
      text
    }
  }
`

export const GET_VERSEEXKURS_FIRMEN_ORGANISATIONS = gql`
  query GetVerseExkursFirmenOrganisations {
    firmen(
      filter: {
        status: { _eq: "published" }
        firmenkategorie: { _eq: "organisation" }
      }
      limit: -1
    ) {
      id
      status
      firmen_trans_logo {
        id
        width
        height
      }
      firmen_banner {
        id
        width
        height
      }
      firmen_name
      firmenkategorie
      firmenherstellerkategorie
      text
    }
  }
`

export const GET_VERSEEXKURS_FIRMEN_OTHER = gql`
  query GetVerseExkursFirmenOther {
    firmen(
      filter: {
        status: { _eq: "published" }
        firmenkategorie: { _eq: "verschiedenes" }
      }
      limit: -1
    ) {
      id
      status
      firmen_trans_logo {
        id
        width
        height
      }
      firmen_banner {
        id
        width
        height
      }
      firmen_name
      firmenkategorie
      firmenherstellerkategorie
      text
    }
  }
`

export const GET_VERSEEXKURS_FRAKTIONEN_UND_GRUPPIERUNGEN = gql`
  query GetVerseExkursFraktionenUndGruppierungen {
    fraktionengruppierungen(
      filter: { status: { _eq: "published" } }
      limit: -1
    ) {
      id
      status
      trans_logo {
        id
        width
        height
      }
      banner {
        id
        width
        height
      }
      name
      text
    }
  }
`

export const GET_VERSEEXKURS_FRAKTION_ODER_GRUPPIERUNG = gql`
  query GetVerseExkursFraktionOderGruppierung($name: String!) {
    fraktionengruppierungen(
      filter: { status: { _eq: "published" }, name: { _eq: $name } }
      limit: -1
    ) {
      id
      status
      trans_logo {
        id
        width
        height
      }
      banner {
        id
        width
        height
      }
      name
      text
    }
  }
`

export const GET_VERSEEXKURS_TECHNOLOGIES = gql`
  query GetVerseExkursTechnologies {
    technologien(
      filter: { status: { _eq: "published" }, category: { _eq: "other" } }
      limit: -1
    ) {
      id
      category
      technologie_banner {
        id
        width
        height
      }
      technologie_name
      technologie_beschreibung
    }
  }
`

export const GET_VERSEEXKURS_TECHNOLOGIE = gql`
  query GetVerseExkursTechnologie($Technologie: String!) {
    technologien(
      filter: {
        technologie_name: { _eq: $Technologie }
        category: { _eq: "other" }
      }
    ) {
      id
      category
      technologie_banner {
        id
        width
        height
      }
      technologie_name
      text
    }
  }
`

export const GET_VERSEEXKURS_WEAPONS = gql`
  query GetVerseExkursTechnologies(
    $squery: String
    $classquery: [String]
    $dmgquery: [String]
    $manuquery: [String]
  ) {
    technologien(
      filter: {
        status: { _eq: "published" }
        category: { _eq: "weapons" }
        waffen_klasse: { waffenklasse: { _in: $classquery } }
        wafffen_schadenstyp: { schadenstyp: { _in: $dmgquery } }
        waffenhersteller: { firmen_name: { _in: $manuquery } }
      }
      sort: ["sort", "waffen_name"]
      search: $squery
      limit: -1
    ) {
      id
      waffen_name
      waffen_preis
      waffen_bild {
        id
        width
        height
      }
      waffenhersteller {
        id
        firmen_name
        firmen_trans_logo {
          id
          width
          height
        }
        text
      }
      waffen_klasse {
        id
        waffenklasse
        waffenklassensize {
          waffensize
        }
      }
      waffengewicht
      waffen_kaliber
      wafffen_schadenstyp {
        id
        schadenstyp
      }
      waffen_feuerrate_einzel
      waffen_feuerrate_salve
      waffen_feuerrate_vollauto
      waffen_feuerrate_aufgeladen
      waffen_magazin
      waffen_visier {
        id
        visiername
      }
      waffen_muendungs_geschwindigkeit
      waffen_locktime
      waffen_beschreibung
      waffen_maximale_reichweite
      waffen_effektive_reichweite
    }
  }
`

export const GET_VERSEEXKURS_WEAPONUTILS = gql`
  query GetVerseExkursWeaponUtils {
    firmen(
      filter: { status: { _eq: "published" }, handweapon: { _eq: true } }
    ) {
      firmen_name
    }

    waffen_klassen {
      waffenklasse
    }

    waffen_schadenstyp {
      schadenstyp
    }
  }
`

export const GET_VERSEEXKURS_WEAPON = gql`
  query GetVerseExkursTechnologie($Weapon: String!) {
    technologien(
      filter: { waffen_name: { _eq: $Weapon }, category: { _eq: "weapons" } }
    ) {
      id
      waffen_name
      waffen_preis
      waffen_bild {
        id
        width
        height
      }
      waffenhersteller {
        id
        firmen_name
        firmen_trans_logo {
          id
          width
          height
        }
        text
      }
      waffen_klasse {
        id
        waffenklasse
        waffenklassensize {
          waffensize
        }
      }
      waffengewicht
      waffen_kaliber
      wafffen_schadenstyp {
        id
        schadenstyp
      }
      waffen_feuerrate_einzel
      waffen_feuerrate_salve
      waffen_feuerrate_vollauto
      waffen_feuerrate_aufgeladen
      waffen_magazin
      waffen_visier {
        id
        visiername
      }
      waffen_muendungs_geschwindigkeit
      waffen_locktime
      waffen_beschreibung
      waffen_maximale_reichweite
      waffen_effektive_reichweite
    }
    technologien_waffen_feuermodi_1 {
      technologien_id(filter: { waffen_name: { _eq: $Weapon } }) {
        waffen_name
      }
      waffen_feuermodi_id {
        feuermodus
      }
    }
  }
`

export const GET_VERSEEXKURS_SPECTRUM_ARTICLES = gql`
  query GetVerseExkursSpectrumArticles {
    spectrum(
      filter: { status: { _eq: "published" } }
      sort: ["sort", "-spectrum_kategorie_beschreibung", "spectrum_titel"]
      limit: 50
    ) {
      id
      status
      spectrum_titel
      text
      spectrum_beitrag_kateogrie
      spectrum_kategorie_beschreibung
      image {
        id
        width
        height
      }
    }
  }
`

export const GET_VERSEEXKURS_SPECTRUM_CATEGORY = gql`
  query Spectrum {
    spectrum(filter: { status: { _eq: "published" } }, limit: -1) {
      id
      status
      spectrum_titel
      text
      spectrum_beitrag_kateogrie
      spectrum_kategorie_beschreibung
      image {
        id
        width
        height
      }
    }
  }
`

export const GET_VERSEEXKURS_LITERATUREN = gql`
  query GetVerseExkursLiteraturen {
    literatur_reihen(
      filter: { status: { _eq: "published" } }
      sort: ["sort", "reihen_titel"]
      limit: -1
    ) {
      id
      status
      reihen_titel
      reihen_cover {
        id
        width
        height
      }
      reihen_author
      reihen_protagonist
      literatur_reihen_single_kapitel_bool
      text
    }
  }
`

export const GET_VERSEEXKURS_LITERATUR_REIHE = gql`
  query GetVerseExkursLiteraturReihe {
    literatur(
      filter: { status: { _eq: "published" } }
      sort: ["sort", "literatur_kapitel"]
      limit: -1
    ) {
      id
      status
      literatur_reihe {
        id
        reihen_cover {
          id
          width
          height
        }
        reihen_titel
        literatur_reihen_single_kapitel_bool
        text
      }
      literatur_kapitel
    }
  }
`
export const GET_VERSEEXKURS_LITERATUR_REIHEN = gql`
  query GetVerseExkursLiteraturReihen {
    literatur_reihen(filter: { status: { _eq: "published" } }, limit: -1) {
      id
      status
      reihen_cover {
        id
        width
        height
      }
      reihen_titel
      literatur_reihen_single_kapitel_bool
      text
      literatur(sort: ["sort", "literatur_kapitel"]) {
        id
        literatur_kapitel
      }
    }
  }
`

export const GET_VERSEEXKURS_LITERATUR_ARTICLE = gql`
  query GetVerseExkursLiteraturArticle($rId: String!) {
    literatur(
      filter: {
        status: { _eq: "published" }
        literatur_reihe: { id: { _eq: $rId } }
      }
      limit: -1
    ) {
      id
      status
      literatur_reihe {
        id
        reihen_cover {
          id
          width
          height
        }
        reihen_titel
      }
      literatur_kapitel
      text
    }
  }
`

// SHIPEXKURS QUERYS
export const GET_SHIPEXKURS_SHIPS = gql`
  query GerShipExkursShips {
    ships(filter: { status: { _eq: "published" } }, limit: -1) {
      id
      name
      erkulIdentifier
      slug
      length
      beam
      height
      mass
      cargo
      hydrogenFuelTankSize
      quantumFuelTankSize
      minCrew
      maxCrew
      scmSpeed
      afterburnerSpeed
      groundSpeed
      afterburnerGroundSpeed
      pitchMax
      yawMax
      rollMax
      xaxisAcceleration
      yaxisAcceleration
      zaxisAcceleration
      size
      holoColored
      storeUrl
      salesPageUrl
      price
      pledgePrice
      onSale
      productionStatus
      productionNote
      classification
      focus
      hasModules
      hasUpgrades
      hasPaints
      brochure {
        id
      }
      holo {
        id
      }
      manufacturer {
        id
        firmen_name
        firmen_trans_logo {
          id
        }
      }
      storeImage {
        id
      }
      description
      history
      ratings
      s_w
    }
  }
`

export const GET_SHIPEXKURS_SHIPUTILS = gql`
  query GetShipExkursShipUtils {
    ships {
      size
      sizeLabel
      classification
      classificationLabel
      focus
    }
  }
`

export const GET_SHIPEXKURS_SHIP = gql`
  query GerShipExkursShips($slug: String!) {
    ships(
      filter: { status: { _eq: "published" }, slug: { _eq: $slug } }
      limit: -1
    ) {
      id
      name
      erkulIdentifier
      slug
      length
      beam
      height
      mass
      cargo
      hydrogenFuelTankSize
      quantumFuelTankSize
      minCrew
      maxCrew
      scmSpeed
      afterburnerSpeed
      size
      holoColored
      storeUrl
      salesPageUrl
      price
      pledgePrice
      onSale
      productionStatus
      productionNote
      classification
      focus
      hasModules
      hasUpgrades
      hasPaints
      brochure {
        id
      }
      holo {
        id
      }
      manufacturer {
        id
        firmen_name
        firmen_trans_logo {
          id
        }
      }
      storeImage {
        id
      }
      gallery {
        directus_files_id {
          id
          width
          height
        }
      }
      description
      history
      ratings
      s_w
    }
  }
`
