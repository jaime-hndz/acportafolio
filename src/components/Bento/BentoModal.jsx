import React, { useState } from "react";
import { Carousel, Modal } from "antd";
import { RowCol } from "./RowCol";
import { LabelTags, Tags } from "./CustomTags";
import { projectsObject } from "../../helpers/ProjectsObject";
import { DecoderText } from "../decoder-text/decoder-text";
import { useTranslation } from "react-i18next";

const BentoModal = ({ id, className }) => {
  const carouselRef = React.createRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [seeMore, setSeeMore] = useState(false);

  const { t } = useTranslation();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <RowCol
        num={projectsObject[id].numberColumn}
        className={`${id}-preview p-10 relative ${className} group`}
        color={projectsObject[id].primaryColor}
        onClick={showModal}
      >
        <div className={`${projectsObject[id].textStyle} select-none`}>
          <DecoderText
            text={projectsObject[id][`title${t("language")}`] ?? ""}
            delay={1000}
          />
        </div>
        <Tags tags={projectsObject[id].tags} />
      </RowCol>
      <Modal
        className="text-white"
        footer={null}
        cancelButtonProps={false}
        title={
          <div className={`${projectsObject[id].textStyle} text-white`}>
            {projectsObject[id][`title${t("language")}`]}
          </div>
        }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={projectsObject[id].mini ? 700 : 1000}
      >
        <LabelTags tags={projectsObject[id].labelTags} />
        <div className="text-white  ">
          <div
            className={`p-2 space-y-4 ${
              seeMore ? "" : ""
            }   transition-all duration-300`}
          >
            {projectsObject[id][t("language").toLowerCase()].map(
              (p, i, arr) => {
                if (i === 0 || seeMore) {
                  return (
                    <p key={i}>
                      {p}
                      {" "}
                      {(i === arr.length - 1 || !seeMore) && !projectsObject[id].mini ? (
                        <span
                          className="underline italic text-sky-500"
                          onClick={() => setSeeMore(!seeMore)}
                        >
                           {!seeMore ? t('readMore') : t('readLess')}
                        </span>
                      ) : null}
                    </p>
                  );
                }
                return null;
              }
            )}
          </div>
          {projectsObject[id].images.length > 0 ? (
            <Carousel autoplay className="w-full" ref={carouselRef}>
              {projectsObject[id].images.map((i) => (
                <div
                  key={i}
                  onClick={() => {
                    carouselRef.current.next();
                  }}
                >
                  <div
                    className={`w-full h-[600px] bg-contain bg-no-repeat bg-center m-auto ${i}`}
                  ></div>
                </div>
              ))}
            </Carousel>
          ) : null}
        </div>
      </Modal>
    </>
  );
};
export default BentoModal;
