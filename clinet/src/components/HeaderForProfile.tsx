import { DataForHeader } from "@/types/types";
import TrophyCom from "./TrophyCom";

interface DynamicHeaderProp {
  dataForHeader: DataForHeader;
}

const DynamicHeader = ({ dataForHeader }: DynamicHeaderProp) => {
  const secondImgClassName =
    dataForHeader.type === "competition"
      ? "w-[20px] h-[20px]"
      : "w-[80px] h-[90px]";

  const formatKey = (key: String) => {
    return key.replace(/([a-z])([A-Z])/g, "$1 $2");
  };
  if (!dataForHeader) return null;
  console.log(dataForHeader.successesData);

  return (
    <div>
      <div className="relative bg-white">
        <div className="shadow bg-[linear-gradient(to_bottom,_#fff_0%,_#ddd_60%)]  font-bold h-[150px]">
          <div className="p-1 flex justify-between  ">
            <h1 className="text-[38px] ml-2">{dataForHeader.title}</h1>
            <div className="bg-white flex shadow">
              <div className="p-3 ">
                <img
                  src={dataForHeader.secondImg}
                  alt="secondImg"
                  className={` rounded-full ${secondImgClassName}`}
                />
              </div>
              <div className="px-2">
                <a className="text-[#1d75a3] text-[16px]">
                  {dataForHeader.secondTitle}
                </a>
                <div>
                  {dataForHeader.firstData.map(
                    (item: object, index: number) => {
                      const [key, value] = Object.entries(item)[0];
                      return (
                        <div key={index} className=" text-[12px]">
                          <span className="text-[#645d5d]">
                            {formatKey(key)}:
                          </span>{" "}
                          {value || "N/A"}
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="min-h-[100px]">
          <div>
            <div className="absolute top-16 left-3 bg-white">
              <img
                src={dataForHeader.frontImg}
                alt="La Liga Logo"
                className="w-[140px] h-[180px]"
              />
            </div>
            <div className="ml-auto ">
              <div className="absolute bottom-3 right-3 bg-[#5ca6ff] text-white  px-5 text-[52px] font-light text-right">
                {dataForHeader.marketValue}
                <p className=" text-[11px] text-right">Total Market Value</p>
              </div>
            </div>
          </div>
          <div className="mr-[300px] ml-[160px] text-[12px] flex">
            <div>
              {dataForHeader.secondData.map((item: object, index: number) => {
                const [key, value] = Object.entries(item)[0]; // Extract the key and value
                return (
                  <div key={index} className="text-[12px]">
                    {key === "trophy" ? null : ( //   <img src={value as string} alt="Trophy" className="flex" />
                      <>
                        <span className="text-[#645d5d]">
                          {formatKey(key)}:
                        </span>{" "}
                        <span>{value || "N/A"}</span>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="ml-4">
              {dataForHeader.thirdData.map((item: object, index: number) => {
                const [key, value] = Object.entries(item)[0]; // Extract the key and value
                return (
                  <div key={index} className="text-[12px]">
                    {key === "trophy" ? (
                      <img
                        src={value as string}
                        alt="Trophy"
                        className="mt-2 w-[80px] h-[70px]"
                      />
                    ) : (
                      <>
                        <span className="text-[#645d5d]">
                          {formatKey(key)}:
                        </span>{" "}
                        <span>{value || "N/A"}</span>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <hr />
      </div>

      {dataForHeader.type !== "competition" &&
        dataForHeader.successesData &&
        dataForHeader.successesData.length > 0 && (
          <div className="min-h-[80px] bg-white flex">
            {dataForHeader.successesData.map((success) => (
              <TrophyCom key={success.id} successData={success} />
            ))}
          </div>
        )}
    </div>
  );
};

export default DynamicHeader;
