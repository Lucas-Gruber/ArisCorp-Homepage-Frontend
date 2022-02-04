import Image from "next/image";
import { SquareLoader } from "react-spinners";
import { Tab } from "@headlessui/react";

const { gql, useQuery } = require("@apollo/client");

const OUR_GAMEPLAYS = gql`
  query GetGameplays {
    gameplays(filter: { status: { _eq: "published" } }, sort: ["sort", "id"]) {
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
      gameplay_text
    }
  }
`;

export default function OurGameplays() {
  const { loading, error, data } = useQuery(OUR_GAMEPLAYS);

  if (loading) return <div className="flex justify-center pt-10"><SquareLoader color="#00ffe8" speedMultiplier="0.8" loading={loading} /></div>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <Tab.Group>
        <Tab.List className={"flex flex-wrap justify-center max-w-7xl mx-auto"}>
          {data.gameplays.map((data) => (
            <Tab key={data.id} className={"p-3 m-1"}>
              <div className="relative mx-3 my-2 transition-all duration-300 ease-out border-solid cursor-pointer h-36 w-36 border-1 hover:scale-150">
                <Image
                  src={
                    "https://cms.ariscorp.de/assets/" + data.gameplay_logo.id
                  }
                  width={144}
                  height={144}
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL={
                    "https://cms.ariscorp.de/assets/" +
                    data.gameplay_logo.id +
                    "?width=16&quality=1"
                  }
                  alt={data.gameplay_name + " Logo"}
                />
              </div>
            </Tab>
          ))}
          <hr />
        </Tab.List>
        <Tab.Panels className={"p-4"}>
          {data.gameplays.map((data) => (
            <Tab.Panel key={data.id}>
              <div className="mx-auto text-center cursor-pointer max-w-7xl">
                <div className="max-w-[1100px] mx-auto">
                  <h1 className="pb-4 uppercase text-primary">
                    {data.gameplay_name}
                  </h1>
                  <div className="flex space-x-5">
                    <div className="w-[542px] h-[228px] relative">
                      <Image
                        src={
                          "https://cms.ariscorp.de/assets/" +
                          data.gameplay_bild_links.id
                        }
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        blurDataURL={
                          "https://cms.ariscorp.de/assets/" +
                          data.gameplay_bild_links.id +
                          "?width=16&quality=1"
                        }
                        alt={data.gameplay_name + " linkes Bild"}
                      />
                    </div>
                    <div className="w-[542px] h-[228px] relative">
                      <Image
                        src={
                          "https://cms.ariscorp.de/assets/" +
                          data.gameplay_bild_rechts.id
                        }
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        blurDataURL={
                          "https://cms.ariscorp.de/assets/" +
                          data.gameplay_bild_rechts.id +
                          "?width=16&quality=1"
                        }
                        alt={data.gameplay_name + " rechtes Bild"}
                      />
                    </div>
                  </div>

                  <div className="max-w-5xl mx-auto mt-4 text-center">
                    <p>{data.gameplay_text}</p>
                  </div>
                </div>
                <hr />
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </>
  );
}