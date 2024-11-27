import React from "react";
import { Element } from "react-scroll";
import { links, logos } from "../contsants";
import Marker from "../componenst/Marker";

const Download = () => {
  return (
    <section>
      <Element name="Download" className="g7 relative pb-32 pt-24 max-md:py-16">
        <div className="container">
          {/* //// */}
          <div className="flex items-center">
            <div className="relative mr-6 flex-540 max-xl:flex-280">
              <div className="mb-10">
                <img src="images/xora.svg" alt="xora" width={160} height={55} />
              </div>
              <p className="body-1 mb-10 max-w-md">
                Try it now for free on ios, Android, PC, Web, whatever Your
                flavor, we've got you coverd
              </p>
              <ul className="flex flex-wrap items-center gap-6">
                {links.map(({ id, title, icon, url }) => (
                  <li
                    key={id}
                    className="download_tech-link download_tech-link_last-before download_tech-link_last-after "
                  >
                    <a
                      href={url}
                      className="size-22 download_tech-icon_before relative flex items-center justify-center rounded-half border-2 border-s3 bg-s1 transition-borderColor duration-500"
                    >
                      <span className="absolute -top-2 rotate-90">
                        <Marker />
                      </span>
                      <img
                        src={"images/lines.svg"}
                        alt="lines"
                        className="absolute size-13/20 object-contain"
                      />
                      <span className="download_tech-icon">{icon}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-10 max-md:hidden">
              <div className="download_preview-before download_preview-after rounded-40 relative w-[955px] border-2 border-s5 p-6 ">
                <div className="relative rounded-3xl bg-s1 px-6 pb-6 pt-14">
                  <span className="download_preview-dot left-6 bg-p2" />
                  <span className="download_preview-dot left-11 bg-s3" />
                  <span className="download_preview-dot left-16 bg-p1/15" />

                  <img
                    src="/images/screen.jpg"
                    alt="screen"
                    width={855}
                    height={655}
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          <ul className="mt-24 flex  justify-center max-lg:hidden">
            {logos.map(({ id, url, width, height, title }) => (
              <li key={id} className="mx-10">
                <img src={url} width={width} height={height} alt="title" />
              </li>
            ))}
          </ul>
        </div>
      </Element>
    </section>
  );
};

export default Download;