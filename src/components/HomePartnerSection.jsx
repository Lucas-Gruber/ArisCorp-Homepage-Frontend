import Image from 'next/image'
import Link from 'next/link'

const PartnerSection = ({ data }) => {
  return (
    <div className="flex flex-wrap mx-[-15px] justify-center items-center px-4">
      <hr />
      <h2
        id="partners"
        className="mb-10 text-xs font-medium text-center scroll-mt-28 sm:text-base md:text-lg lg:text-2xl"
      >
        Die ARISCORP unterhält auch Partnerschaften mit anderen Star Citizen
        Organisationen. Für nähere Informationen gern auf die jeweiligen Logos
        klicken.
      </h2>
      <div className="flex flex-wrap justify-between space-x-20">
        {data.map((partner) => (
          <Link legacyBehavior key={partner.id} href={partner.partner_website}>
            <a
              target="_blank"
              className="group decoration-transparent"
              aria-label={'Website von der 501st '}
            >
              <figure className="mb-4">
                <Image
                  src={
                    'https://cms.ariscorp.de/assets/' + partner.partner_logo.id
                  }
                  width={250}
                  height={250}
                  alt={partner.partner_name + ' Logo'}
                  placeholder="blur"
                  blurDataURL={
                    'https://cms.ariscorp.de/assets/' +
                    partner.partner_logo.id +
                    '?width=16&quality=1'
                  }
                />
                <figcaption>
                  <p className="text-center no-underline underline-offset-2 decoration-1 decoration-secondary group-hover:underline">
                    {partner.partner_name}
                  </p>
                </figcaption>
              </figure>
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default PartnerSection
