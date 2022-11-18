import { useState } from "react";
import tabone from "./tabone.json";
import Svg from "./reuseable";
function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="py-12 px-12 relative">
        <div className="flex flex-col mt-7  my-shadow rounded bg-[#F9F9F9]">
          <div className="header flex flex-row justify-between mb-4 items-center  h-[80px] bg-white p-4 border border-gray-200">
            <div className="div flex">
              <svg
                width={34}
                height={34}
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect
                  y="0.249939"
                  width="33.6284"
                  height="12.3446"
                  rx={5}
                  fill="#11998E"
                />
                <rect
                  y="15.2971"
                  width="33.6284"
                  height="8.93919"
                  rx="4.46959"
                  fill="#11998E"
                />
                <rect
                  y="27.3649"
                  width="33.6284"
                  height="6.38513"
                  rx="3.19257"
                  fill="#11998E"
                />
                <rect
                  x="11.9187"
                  y="0.675629"
                  width="11.0676"
                  height="11.0676"
                  fill="url(#pattern0)"
                />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                  >
                    <use
                      xlinkHref="#image0_14_2417"
                      transform="scale(0.0384615)"
                    />
                  </pattern>
                  <image
                    id="image0_14_2417"
                    width={26}
                    height={26}
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAABDUlEQVRIie3SwSpEURwH4HOtNMqghiexmGJDNpKVB/AEnsFONgrZsGPHQ9hYWUqKlFKKLKwmC2Y+C5PGdUxzrzNlMb/lOf/z+86pE8Ig/yFYxQ5q/UTqePeZJyz1A6ng2ve8Yig1tO1njlMjM2jmkGdMpURGcBt5zUoypA3tR5Cj1MgCWjnkARMpkSruI69ZLFIyjg3Uu8wcRpCDIsgYztsHG5iPzCxHkDuMFoFOcwUNzHXs1/CYm2l1zvQKnUVu+4XhJLK/WwhpF03i8hdsK7J+g0phqI3VcBEpzaeJ2VJIQWzzT0iP2BWGk0BdsDdMJ0M6sPwHWS/Tk/WIVUMIayGElxDCXpZlymCDlMoHTA1akBmneiAAAAAASUVORK5CYII="
                  />
                </defs>
              </svg>
              <p className="text-3xl font-semibold  leading-none text-gray-800 pl-6">
                PriorityWise
              </p>
            </div>
            <div className="div  relative">
              <button onClick={() => setShow(!show)} className="p-2 mr-8">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/2323232.png"
                  alt="one"
                />
              </button>
              <div
                className={`w-[242px] bg-white rounded-lg shadow absolute z-[1000] right-12 ${
                  show ? `block` : `hidden`
                }`}
              >
                <div className="mt-4 p-4">
                  <p className="text-xs w-[96px] font-semibold text-center text-yellow-600 px-4 py-2 bg-yellow-600 bg-opacity-10 rounded-full">
                    Upgrade
                  </p>
                  <hr className="border-gray-200 my-4" />
                  <p className="text-base text-green-500 flex gap-3 items-center">
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.1 14.6667H6.9C6.77778 14.6667 6.66945 14.6278 6.575 14.55C6.48056 14.4723 6.42223 14.3723 6.4 14.25L6.13334 12.5667C5.92223 12.4889 5.7 12.3834 5.46667 12.25C5.23334 12.1167 5.02778 11.9778 4.85 11.8334L3.3 12.55C3.17778 12.6056 3.05556 12.6139 2.93334 12.575C2.81112 12.5362 2.71667 12.4556 2.65 12.3334L1.55 10.3834C1.48334 10.2723 1.46667 10.1556 1.5 10.0334C1.53334 9.91115 1.6 9.81115 1.7 9.73337L3.13334 8.68337C3.11111 8.58337 3.09723 8.46949 3.09167 8.34171C3.08612 8.21393 3.08334 8.10004 3.08334 8.00004C3.08334 7.90004 3.08612 7.78615 3.09167 7.65837C3.09723 7.5306 3.11111 7.41671 3.13334 7.31671L1.7 6.26671C1.6 6.18893 1.53334 6.08893 1.5 5.96671C1.46667 5.84449 1.48334 5.72782 1.55 5.61671L2.65 3.66671C2.71667 3.54449 2.81112 3.46393 2.93334 3.42504C3.05556 3.38615 3.17778 3.39449 3.3 3.45004L4.85 4.16671C5.02778 4.02226 5.23334 3.88337 5.46667 3.75004C5.7 3.61671 5.92223 3.51671 6.13334 3.45004L6.4 1.75004C6.42223 1.62782 6.48056 1.52782 6.575 1.45004C6.66945 1.37226 6.77778 1.33337 6.9 1.33337H9.1C9.22223 1.33337 9.33056 1.37226 9.425 1.45004C9.51945 1.52782 9.57778 1.62782 9.6 1.75004L9.86667 3.43337C10.0778 3.51115 10.3028 3.61393 10.5417 3.74171C10.7806 3.86949 10.9833 4.01115 11.15 4.16671L12.7 3.45004C12.8222 3.39449 12.9444 3.38615 13.0667 3.42504C13.1889 3.46393 13.2833 3.54449 13.35 3.66671L14.45 5.60004C14.5167 5.71115 14.5361 5.8306 14.5083 5.95837C14.4806 6.08615 14.4111 6.18893 14.3 6.26671L12.8667 7.28337C12.8889 7.39449 12.9028 7.51393 12.9083 7.64171C12.9139 7.76948 12.9167 7.88893 12.9167 8.00004C12.9167 8.11115 12.9139 8.22782 12.9083 8.35004C12.9028 8.47226 12.8889 8.58893 12.8667 8.70004L14.3 9.73337C14.4 9.81115 14.4667 9.91115 14.5 10.0334C14.5333 10.1556 14.5167 10.2723 14.45 10.3834L13.35 12.3334C13.2833 12.4556 13.1889 12.5362 13.0667 12.575C12.9444 12.6139 12.8222 12.6056 12.7 12.55L11.15 11.8334C10.9722 11.9778 10.7694 12.1195 10.5417 12.2584C10.3139 12.3973 10.0889 12.5 9.86667 12.5667L9.6 14.25C9.57778 14.3723 9.51945 14.4723 9.425 14.55C9.33056 14.6278 9.22223 14.6667 9.1 14.6667ZM8 10.1667C8.6 10.1667 9.11111 9.9556 9.53334 9.53337C9.95556 9.11115 10.1667 8.60004 10.1667 8.00004C10.1667 7.40004 9.95556 6.88893 9.53334 6.46671C9.11111 6.04449 8.6 5.83337 8 5.83337C7.4 5.83337 6.88889 6.04449 6.46667 6.46671C6.04445 6.88893 5.83334 7.40004 5.83334 8.00004C5.83334 8.60004 6.04445 9.11115 6.46667 9.53337C6.88889 9.9556 7.4 10.1667 8 10.1667ZM8 9.16671C7.67778 9.16671 7.40278 9.05282 7.175 8.82504C6.94723 8.59726 6.83334 8.32226 6.83334 8.00004C6.83334 7.67782 6.94723 7.40282 7.175 7.17504C7.40278 6.94726 7.67778 6.83337 8 6.83337C8.32223 6.83337 8.59723 6.94726 8.825 7.17504C9.05278 7.40282 9.16667 7.67782 9.16667 8.00004C9.16667 8.32226 9.05278 8.59726 8.825 8.82504C8.59723 9.05282 8.32223 9.16671 8 9.16671ZM7.26667 13.6667H8.73334L8.96667 11.8C9.33334 11.7112 9.68056 11.5723 10.0083 11.3834C10.3361 11.1945 10.6333 10.9667 10.9 10.7L12.6667 11.4667L13.3333 10.2667L11.7667 9.11671C11.8111 8.92782 11.8472 8.74171 11.875 8.55837C11.9028 8.37504 11.9167 8.18893 11.9167 8.00004C11.9167 7.81115 11.9056 7.62504 11.8833 7.44171C11.8611 7.25837 11.8222 7.07226 11.7667 6.88337L13.3333 5.73337L12.6667 4.53337L10.9 5.30004C10.6444 5.01115 10.3556 4.76949 10.0333 4.57504C9.71111 4.3806 9.35556 4.2556 8.96667 4.20004L8.73334 2.33337H7.26667L7.03334 4.20004C6.65556 4.27782 6.30278 4.41115 5.975 4.60004C5.64723 4.78893 5.35556 5.02226 5.1 5.30004L3.33334 4.53337L2.66667 5.73337L4.23334 6.88337C4.18889 7.07226 4.15278 7.25837 4.125 7.44171C4.09723 7.62504 4.08334 7.81115 4.08334 8.00004C4.08334 8.18893 4.09723 8.37504 4.125 8.55837C4.15278 8.74171 4.18889 8.92782 4.23334 9.11671L2.66667 10.2667L3.33334 11.4667L5.1 10.7C5.36667 10.9667 5.66389 11.1945 5.99167 11.3834C6.31945 11.5723 6.66667 11.7112 7.03334 11.8L7.26667 13.6667Z"
                        fill="#11998E"
                      />
                    </svg>
                    My settings
                  </p>
                  <p className="text-base text-gray-600 my-4 flex gap-3 items-center">
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12.65C4.72222 12.65 4.48611 12.5528 4.29167 12.3583C4.09722 12.1639 4 11.9278 4 11.65V2.31665C4 2.03887 4.09722 1.80276 4.29167 1.60832C4.48611 1.41387 4.72222 1.31665 5 1.31665H12.3333C12.6111 1.31665 12.8472 1.41387 13.0417 1.60832C13.2361 1.80276 13.3333 2.03887 13.3333 2.31665V11.65C13.3333 11.9278 13.2361 12.1639 13.0417 12.3583C12.8472 12.5528 12.6111 12.65 12.3333 12.65H5ZM5 11.65H12.3333V2.31665H5V11.65ZM3 14.65C2.72222 14.65 2.48611 14.5528 2.29167 14.3583C2.09722 14.1639 2 13.9278 2 13.65V4.09998C2 3.95554 2.04722 3.83609 2.14167 3.74165C2.23611 3.64721 2.35556 3.59998 2.5 3.59998C2.64444 3.59998 2.76389 3.64721 2.85833 3.74165C2.95278 3.83609 3 3.95554 3 4.09998V13.65H10.4C10.5444 13.65 10.6639 13.6972 10.7583 13.7916C10.8528 13.8861 10.9 14.0055 10.9 14.15C10.9 14.2944 10.8528 14.4139 10.7583 14.5083C10.6639 14.6028 10.5444 14.65 10.4 14.65H3ZM5 2.31665V11.65V2.31665Z"
                        fill="#4B5563"
                      />
                    </svg>
                    Privacy policy
                  </p>
                  <p className="text-base text-gray-600  flex gap-3 items-center">
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.75 10.55C10.65 10.45 10.6 10.3278 10.6 10.1833C10.6 10.0389 10.65 9.92222 10.75 9.83333L12.0833 8.5H6.75C6.60556 8.5 6.48611 8.45278 6.39167 8.35833C6.29722 8.26389 6.25 8.14444 6.25 8C6.25 7.85556 6.29722 7.73611 6.39167 7.64167C6.48611 7.54722 6.60556 7.5 6.75 7.5H12.05L10.7 6.15C10.6111 6.06111 10.5667 5.94722 10.5667 5.80833C10.5667 5.66944 10.6167 5.55 10.7167 5.45C10.8167 5.35 10.9361 5.3 11.075 5.3C11.2139 5.3 11.3333 5.35 11.4333 5.45L13.65 7.66667C13.7056 7.72222 13.7444 7.77778 13.7667 7.83333C13.7889 7.88889 13.8 7.95 13.8 8.01667C13.8 8.08333 13.7889 8.14444 13.7667 8.2C13.7444 8.25556 13.7056 8.31111 13.65 8.36667L11.45 10.5667C11.3611 10.6556 11.2472 10.7 11.1083 10.7C10.9694 10.7 10.85 10.65 10.75 10.55ZM3 14C2.73333 14 2.5 13.9 2.3 13.7C2.1 13.5 2 13.2667 2 13V3C2 2.73333 2.1 2.5 2.3 2.3C2.5 2.1 2.73333 2 3 2H7.35C7.49444 2 7.61389 2.04722 7.70833 2.14167C7.80278 2.23611 7.85 2.35556 7.85 2.5C7.85 2.64444 7.80278 2.76389 7.70833 2.85833C7.61389 2.95278 7.49444 3 7.35 3H3V13H7.35C7.49444 13 7.61389 13.0472 7.70833 13.1417C7.80278 13.2361 7.85 13.3556 7.85 13.5C7.85 13.6444 7.80278 13.7639 7.70833 13.8583C7.61389 13.9528 7.49444 14 7.35 14H3Z"
                        fill="#4B5563"
                      />
                    </svg>
                    Log out
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="header flex justify-between mb-4 md:items-center items-start gap-4 bg-[#F9F9F9] md:flex-row flex-col ">
            <div className="div flex">
              <p className="leading-none px-10 text-2xl font-medium text-gray-900">
                Prioritizations
              </p>
            </div>
            <div className="div flex gap-4 items-center px-10 md:flex-row flex-col">
              <button className="text-base font-medium text-gray-400 flex gap-2 items-center px-4 py-2.5 bg-white shadow border rounded-lg border-gray-200 hover:bg-gray-100">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.9417 3.52213H8.97846C8.76295 2.46479 7.82578 1.66666 6.70573 1.66666H3.8916C3.12427 1.66666 2.5 2.29093 2.5 3.05826V16.1084C2.5 16.8757 3.12427 17.5 3.8916 17.5H16.9417C17.7091 17.5 18.3333 16.8757 18.3333 16.1084C18.3333 15.1137 18.3333 6.44056 18.3333 4.91373C18.3333 4.1464 17.7091 3.52213 16.9417 3.52213ZM3.8916 2.59439H6.70573C7.47306 2.59439 8.09733 3.21866 8.09733 3.98599C8.09733 4.24217 8.30502 4.44986 8.5612 4.44986H16.9417C17.1975 4.44986 17.4056 4.65795 17.4056 4.91373V7.23306H16.4779V5.84146C16.4779 5.58528 16.2702 5.37759 16.014 5.37759H4.81934C4.56316 5.37759 4.35547 5.58528 4.35547 5.84146V7.23306H3.42773V3.05826C3.42773 2.80248 3.63583 2.59439 3.8916 2.59439ZM5.2832 7.23306V6.30533H15.5501V7.23306H5.2832ZM17.4056 16.1084C17.4056 16.3642 17.1975 16.5723 16.9417 16.5723H3.8916C3.63583 16.5723 3.42773 16.3642 3.42773 16.1084V8.1608H17.4056V16.1084Z"
                    fill="#9CA3AF"
                  />
                  <path
                    d="M10.0887 13.6223C10.0887 13.6223 10.0888 13.6223 10.0888 13.6223C10.267 13.8005 10.5621 13.8048 10.7446 13.6223C10.7447 13.6223 10.7447 13.6223 10.7447 13.6223L12.6002 11.7668C12.7813 11.5856 12.7813 11.292 12.6002 11.1108C12.419 10.9296 12.1253 10.9296 11.9442 11.1108L10.8806 12.1744V9.58331C10.8806 9.32713 10.6729 9.11945 10.4167 9.11945C10.1605 9.11945 9.95284 9.32713 9.95284 9.58331V12.1744L8.88922 11.1108C8.70809 10.9296 8.41437 10.9296 8.23322 11.1108C8.05206 11.2919 8.05206 11.5856 8.23322 11.7668L10.0887 13.6223Z"
                    fill="#9CA3AF"
                  />
                  <path
                    d="M13.1999 13.7581C12.9437 13.7581 12.736 13.9658 12.736 14.222V14.6859H8.09735V14.222C8.09735 13.9658 7.88966 13.7581 7.63348 13.7581C7.37731 13.7581 7.16962 13.9658 7.16962 14.222V15.1497C7.16962 15.4059 7.37731 15.6136 7.63348 15.6136H13.1999C13.4561 15.6136 13.6638 15.4059 13.6638 15.1497V14.222C13.6638 13.9658 13.4561 13.7581 13.1999 13.7581Z"
                    fill="#9CA3AF"
                  />
                </svg>
                Show archived
              </button>
              <button className="text-base font-medium text-white flex gap-2 items-center  px-4 py-2.5 bg-[#0F8A80] shadow rounded-lg hover:bg-green-700">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99999 4.16666V15.8333M4.16666 9.99999H15.8333"
                    stroke="white"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                New prioritization
              </button>
            </div>
          </div>
          <div className="px-10 py-10 w-full overflow-auto relative">
            <div className="overflow-auto bg-white px-4 py-3 rounded-tl-xl rounded-tr-xl w-full relative">
              <table className="whitespace-nowrap w-full relative">
                <thead className="border-b border-slate-100">
                  <tr className>
                    <th
                      scope="col"
                      className="text-sm font-semibold leading-none text-gray-500 text-left px-2 py-6 pl-6"
                    >
                      Prioritization name
                    </th>
                    <th className="text-sm font-semibold leading-none text-gray-500 text-left px-2 py-6">
                      Ideas
                    </th>
                    <th className="text-sm font-semibold leading-none text-gray-500 text-left px-2 py-6">
                      Responses
                    </th>
                    <th className="text-sm font-semibold leading-none text-gray-500 text-left px-2 py-6">
                      Created date
                    </th>
                    <th className="text-sm font-semibold text-center leading-none text-gray-500  px-2 py-6">
                      Last Updated
                    </th>
                    <th className="text-sm pr-4 font-semibold leading-none text-gray-500 text-center px-2 py-6">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tabone.map((item, index) => {
                    return (
                      <tr key={index} className="border-b border-slate-100">
                        <td className="text-sm leading-none text-gray-700 text-left py-7 pr-8 pl-6 pr-2">
                          <div className="flex items-center gap-4">
                            {item.name}
                            <p class="text-xs font-medium text-center text-gray-500 px-2.5 py-1.5 bg-gray-200 rounded-full">
                              {item.rice}
                            </p>
                          </div>
                        </td>
                        <td className="text-sm leading-none text-gray-700 text-left py-7 pr-8 font-medium">
                          {item.idea}
                        </td>
                        <td className="text-sm leading-none text-gray-700 text-left py-7 font-medium">
                          {item.response}
                        </td>
                        <td className="text-sm leading-none text-gray-700 text-left py-7 font-medium">
                          {item.date}
                        </td>
                        <td className="text-sm leading-none text-gray-700 text-center py-7 font-medium">
                          {item.lastdate}
                        </td>
                        <td className="text-sm leading-none text-center  text-gray-700  py-7">
                          <div className="flex justify-center gap-4">
                            <div className="pl-8">
                              {item.btn.length > 10 ? (
                                <button className="w-[96px] text-xs text-yellow-600 px-4 py-2 bg-yellow-600 bg-opacity-10 rounded-full font-medium">
                                  {item.btn}
                                </button>
                              ) : (
                                <button
                                  className={`w-[96px] text-x px-4 py-2 bg-opacity-10 rounded-full font-medium ${
                                    item.btn.length > 7
                                      ? `text-green-600 bg-green-600`
                                      : `text-gray-600 bg-gray-600`
                                  }`}
                                >
                                  {item.btn}
                                </button>
                              )}
                            </div>
                            <div className="relative flex justify-end flex-shrink-0 cursor-pointer">
                              <Svg />
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12 px-12 mt-10">
        <div className="flex flex-col mt-7  my-shadow rounded bg-[#F9F9F9]">
          <div className="header flex flex-row justify-between mb-4 items-center  h-[80px] bg-white p-4 border border-gray-200">
            <div className="div flex">
              <svg
                width={34}
                height={34}
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect
                  y="0.249939"
                  width="33.6284"
                  height="12.3446"
                  rx={5}
                  fill="#11998E"
                />
                <rect
                  y="15.2971"
                  width="33.6284"
                  height="8.93919"
                  rx="4.46959"
                  fill="#11998E"
                />
                <rect
                  y="27.3649"
                  width="33.6284"
                  height="6.38513"
                  rx="3.19257"
                  fill="#11998E"
                />
                <rect
                  x="11.9187"
                  y="0.675629"
                  width="11.0676"
                  height="11.0676"
                  fill="url(#pattern0)"
                />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                  >
                    <use
                      xlinkHref="#image0_14_2417"
                      transform="scale(0.0384615)"
                    />
                  </pattern>
                  <image
                    id="image0_14_2417"
                    width={26}
                    height={26}
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAABDUlEQVRIie3SwSpEURwH4HOtNMqghiexmGJDNpKVB/AEnsFONgrZsGPHQ9hYWUqKlFKKLKwmC2Y+C5PGdUxzrzNlMb/lOf/z+86pE8Ig/yFYxQ5q/UTqePeZJyz1A6ng2ve8Yig1tO1njlMjM2jmkGdMpURGcBt5zUoypA3tR5Cj1MgCWjnkARMpkSruI69ZLFIyjg3Uu8wcRpCDIsgYztsHG5iPzCxHkDuMFoFOcwUNzHXs1/CYm2l1zvQKnUVu+4XhJLK/WwhpF03i8hdsK7J+g0phqI3VcBEpzaeJ2VJIQWzzT0iP2BWGk0BdsDdMJ0M6sPwHWS/Tk/WIVUMIayGElxDCXpZlymCDlMoHTA1akBmneiAAAAAASUVORK5CYII="
                  />
                </defs>
              </svg>

              <p className="text-3xl font-semibold  leading-none text-gray-800 pl-6">
                PriorityWise
              </p>
            </div>
            <div className="div  relative">
              <button className="p-2 mr-8">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/2323232.png"
                  alt="one"
                />
              </button>
            </div>
          </div>
          <div className="header flex justify-between mb-4 md:items-center items-start gap-4 bg-[#F9F9F9] md:flex-row flex-col ">
            <div className="div flex flex-col px-10">
              <p className="text-base text-center text-green-500">
                <div className="flex gap4">
                  Prioritizations
                  <div className="rotate-90">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-selector"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#00b341"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="8 9 12 5 16 9" />
                    </svg>
                  </div>
                </div>
              </p>
              <div className="flex gap-4 items-center">
                <p className="text-2xl font-medium text-gray-900">
                  R.I.C.E Prioritization 170822
                </p>
                <p className="text-xs font-medium text-center text-gray-500 px-4 py-2 bg-gray-200 rounded-full">
                  R.I.C.E
                </p>
              </div>
            </div>
            <div className="div flex gap-4 items-center px-10 md:flex-row flex-col">
              <p className="text-base font-medium text-center text-gray-500 flex items-center gap-4">
                Rating mode
                {/* <svg
                  width={36}
                  height={20}
                  viewBox="0 0 36 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width={36} height={20} rx={10} fill="#11998E" />
                  <circle cx={26} cy={10} r={8} fill="white" />
                </svg> */}
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </p>
              <button className="text-base font-medium text-gray-400 flex gap-2 items-center px-4 py-2.5 bg-white shadow border rounded-lg border-gray-200 hover:bg-gray-100">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7164 18.5416H7.28307C3.19141 18.5416 1.44141 16.7916 1.44141 12.6999V12.5916C1.44141 8.89161 2.89974 7.10827 6.16641 6.79994C6.49974 6.77494 6.81641 7.02494 6.84974 7.36661C6.88307 7.70827 6.63307 8.01661 6.28307 8.04994C3.66641 8.29161 2.69141 9.52494 2.69141 12.5999V12.7083C2.69141 16.0999 3.89141 17.2999 7.28307 17.2999H12.7164C16.1081 17.2999 17.3081 16.0999 17.3081 12.7083V12.5999C17.3081 9.50827 16.3164 8.27494 13.6497 8.04994C13.3081 8.01661 13.0497 7.71661 13.0831 7.37494C13.1164 7.03327 13.4081 6.77494 13.7581 6.80827C17.0747 7.09161 18.5581 8.88327 18.5581 12.6083V12.7166C18.5581 16.7916 16.8081 18.5416 12.7164 18.5416Z"
                    fill="#292D32"
                  />
                  <path
                    d="M10 13.025C9.65833 13.025 9.375 12.7416 9.375 12.4V1.66663C9.375 1.32496 9.65833 1.04163 10 1.04163C10.3417 1.04163 10.625 1.32496 10.625 1.66663V12.4C10.625 12.75 10.3417 13.025 10 13.025Z"
                    fill="#292D32"
                  />
                  <path
                    d="M9.99954 13.9583C9.84121 13.9583 9.68288 13.9 9.55788 13.775L6.76621 10.9833C6.52454 10.7416 6.52454 10.3416 6.76621 10.1C7.00788 9.85828 7.40788 9.85828 7.64954 10.1L9.99954 12.45L12.3495 10.1C12.5912 9.85828 12.9912 9.85828 13.2329 10.1C13.4745 10.3416 13.4745 10.7416 13.2329 10.9833L10.4412 13.775C10.3162 13.9 10.1579 13.9583 9.99954 13.9583Z"
                    fill="#292D32"
                  />
                </svg>
                Download
              </button>
              <button className="text-base font-medium text-white flex gap-2 items-center  px-4 py-2.5 bg-[#0F8A80] shadow rounded-lg hover:bg-green-700">
                Share
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.53389 6.45492C3.77739 6.20653 4.15843 6.18395 4.42694 6.38718L4.50386 6.45492L9.99967 12.0612L15.4955 6.45492C15.739 6.20653 16.12 6.18395 16.3885 6.38718L16.4655 6.45492C16.709 6.7033 16.7311 7.09198 16.5319 7.36587L16.4655 7.44434L10.4847 13.5451C10.2412 13.7935 9.86012 13.816 9.59162 13.6128L9.51469 13.5451L3.53389 7.44434C3.26605 7.17112 3.26605 6.72814 3.53389 6.45492Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="px-10 py-10 w-full overflow-auto">
            <div className="overflow-auto bg-white px-4 py-3 rounded-tl-xl rounded-tr-xl w-full">
              <table className="whitespace-nowrap w-full">
                <thead className="border-b border-slate-100">
                  <tr className>
                    <th
                      scope="col"
                      className="text-sm font-semibold leading-none text-gray-500 text-left px-2 py-6 pl-6"
                    >
                      Priority
                    </th>
                    <th className="text-sm font-semibold leading-none text-gray-500 text-left px-2 py-6">
                      Ideas
                    </th>
                    <th className="text-sm font-semibold leading-none text-gray-500 text-left px-2 py-6">
                      Reach(+)
                    </th>
                    <th className="text-sm font-semibold leading-none text-gray-500 text-left px-2 py-6">
                      Impact(+)
                    </th>
                    <th className="text-sm font-semibold text-center leading-none text-gray-500 text-left px-2 py-6">
                      Confidence (+)
                    </th>
                    <th className="text-sm pr-4 font-semibold leading-none text-gray-500 text-center px-2 py-6">
                      Effort (-)
                    </th>
                    <th className="text-sm pr-4 font-semibold leading-none text-gray-500 text-center px-2 py-6">
                      R.I.C.E Score
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100">
                    <td className="text-sm leading-none text-gray-700 text-left py-7 pr-8 pl-6 pr-2">
                      1
                    </td>
                    <td className="text-sm leading-none text-gray-700 text-left py-7 pr-8 font-medium">
                      New plinko imprementation
                    </td>
                    <td className="text-sm px-4 leading-none text-gray-700 text-left py-7 font-medium">
                      <input
                        className="w-[88px] px-10 py-4 border rounded-lg border-gray-200"
                        placeholder="7"
                      />
                    </td>
                    <td className="text-sm leading-none text-gray-700 text-left py-7 font-medium">
                      <div className="flex items-center gap-2">
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#11998E" />
                          </svg>
                          1
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#11998E" />
                          </svg>
                          2
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#11998E" />
                          </svg>
                          3
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#11998E" />
                          </svg>
                          4
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#11998E" />
                          </svg>
                          5
                        </div>
                      </div>
                    </td>
                    <td className="text-sm leading-none text-gray-700 text-center py-7 font-medium">
                      <div className="flex flex-col gap-2 items-center justify-center">
                        <svg
                          width={30}
                          height={30}
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx={15} cy={15} r={15} fill="#11998E" />
                          <path
                            d="M15 0C11.0218 -4.74401e-08 7.20644 1.58035 4.3934 4.3934C1.58035 7.20644 3.47789e-07 11.0218 0 15C-3.47789e-07 18.9782 1.58035 22.7936 4.3934 25.6066C7.20644 28.4196 11.0218 30 15 30L15 15L15 0Z"
                            fill="#EAECF0"
                          />
                        </svg>
                        50%
                      </div>
                    </td>
                    <td className="text-sm leading-none text-center flex justify-center text-gray-700  py-7">
                      <div className="flex items-center gap-2">
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#3F6CAF" />
                          </svg>
                          1
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#3F6CAF" />
                          </svg>
                          2
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#3F6CAF" />
                          </svg>
                          3
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#3F6CAF" />
                          </svg>
                          4
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#3F6CAF" />
                          </svg>
                          5
                        </div>
                      </div>
                    </td>
                    <td className="text-sm leading-none text-gray-600 text-center py-7 font-extrabold">
                      120
                    </td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="text-sm leading-none text-gray-700 text-left py-7 pr-8 pl-6 pr-2">
                      2
                    </td>
                    <td className="text-sm leading-none text-gray-700 text-left py-7 pr-8 font-medium">
                      New plinko imprementation
                    </td>
                    <td className="text-sm px-4 leading-none text-gray-700 text-left py-7 font-medium">
                      <input
                        className="w-[88px] px-10 py-4 border rounded-lg border-gray-200"
                        placeholder="7"
                      />
                    </td>
                    <td className="text-sm leading-none text-gray-700 text-left py-7 font-medium">
                      <div className="flex items-center gap-2">
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#11998E" />
                          </svg>
                          1
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#11998E" />
                          </svg>
                          2
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#11998E" />
                          </svg>
                          3
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#11998E" />
                          </svg>
                          4
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#11998E" />
                          </svg>
                          5
                        </div>
                      </div>
                    </td>
                    <td className="text-sm leading-none text-gray-700 text-center py-7 font-medium">
                      <div className="flex flex-col gap-2 items-center justify-center">
                        <svg
                          width={30}
                          height={30}
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx={15} cy={15} r={15} fill="#11998E" />
                          <path
                            d="M15 0C11.0218 -4.74401e-08 7.20644 1.58035 4.3934 4.3934C1.58035 7.20644 3.47789e-07 11.0218 0 15C-3.47789e-07 18.9782 1.58035 22.7936 4.3934 25.6066C7.20644 28.4196 11.0218 30 15 30L15 15L15 0Z"
                            fill="#EAECF0"
                          />
                        </svg>
                        50%
                      </div>
                    </td>
                    <td className="text-sm leading-none text-center flex justify-center text-gray-700  py-7">
                      <div className="flex items-center gap-2">
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#3F6CAF" />
                          </svg>
                          1
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#3F6CAF" />
                          </svg>
                          2
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#3F6CAF" />
                          </svg>
                          3
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#3F6CAF" />
                          </svg>
                          4
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#3F6CAF" />
                          </svg>
                          5
                        </div>
                      </div>
                    </td>
                    <td className="text-sm leading-none text-gray-600 text-center py-7 font-extrabold">
                      31.5
                    </td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="text-sm leading-none text-gray-700 text-left py-7 pr-8 pl-6 pr-2">
                      3
                    </td>
                    <td className="text-sm leading-none text-gray-700 text-left py-7 pr-8 font-medium">
                      Auction house marketplace
                    </td>
                    <td className="text-sm px-4 leading-none text-gray-700 text-left py-7 font-medium">
                      <input
                        className="w-[88px] px-10 py-4 border rounded-lg border-gray-200"
                        placeholder="7"
                      />
                    </td>
                    <td className="text-sm leading-none text-gray-700 text-left py-7 font-medium">
                      <div className="flex items-center gap-2">
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#11998E" />
                          </svg>
                          1
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#11998E" />
                          </svg>
                          2
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#11998E" />
                          </svg>
                          3
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#11998E" />
                          </svg>
                          4
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#11998E" />
                          </svg>
                          5
                        </div>
                      </div>
                    </td>
                    <td className="text-sm leading-none text-gray-700 text-center py-7 font-medium">
                      <div className="flex flex-col gap-2 items-center justify-center">
                        <svg
                          width={30}
                          height={30}
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx={15} cy={15} r={15} fill="#11998E" />
                          <path
                            d="M15 0C11.0218 -4.74401e-08 7.20644 1.58035 4.3934 4.3934C1.58035 7.20644 3.47789e-07 11.0218 0 15C-3.47789e-07 18.9782 1.58035 22.7936 4.3934 25.6066C7.20644 28.4196 11.0218 30 15 30L15 15L15 0Z"
                            fill="#EAECF0"
                          />
                        </svg>
                        50%
                      </div>
                    </td>
                    <td className="text-sm leading-none text-center flex justify-center text-gray-700  py-7">
                      <div className="flex items-center gap-2">
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#3F6CAF" />
                          </svg>
                          1
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#3F6CAF" />
                          </svg>
                          2
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#3F6CAF" />
                          </svg>
                          3
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#3F6CAF" />
                          </svg>
                          4
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#3F6CAF" />
                          </svg>
                          5
                        </div>
                      </div>
                    </td>
                    <td className="text-sm leading-none text-gray-600 text-center py-7 font-extrabold">
                      22.5
                    </td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="text-sm leading-none text-gray-700 text-left py-7 pr-8 pl-6 pr-2">
                      4
                    </td>
                    <td className="text-sm leading-none text-gray-700 text-left py-7 pr-8 font-medium">
                      NNon playing dog friends
                    </td>
                    <td className="text-sm px-4 leading-none text-gray-700 text-left py-7 font-medium">
                      <input
                        className="w-[88px] px-10 py-4 border rounded-lg border-gray-200"
                        placeholder="7"
                      />
                    </td>
                    <td className="text-sm leading-none text-gray-700 text-left py-7 font-medium">
                      <div className="flex items-center gap-2">
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#11998E" />
                          </svg>
                          1
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#11998E" />
                          </svg>
                          2
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#11998E" />
                          </svg>
                          3
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#11998E" />
                          </svg>
                          4
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#11998E" />
                          </svg>
                          5
                        </div>
                      </div>
                    </td>
                    <td className="text-sm leading-none text-gray-700 text-center py-7 font-medium">
                      <div className="flex flex-col gap-2 items-center justify-center">
                        <svg
                          width={30}
                          height={30}
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx={15} cy={15} r={15} fill="#11998E" />
                          <path
                            d="M15 0C11.0218 -4.74401e-08 7.20644 1.58035 4.3934 4.3934C1.58035 7.20644 3.47789e-07 11.0218 0 15C-3.47789e-07 18.9782 1.58035 22.7936 4.3934 25.6066C7.20644 28.4196 11.0218 30 15 30L15 15L15 0Z"
                            fill="#EAECF0"
                          />
                        </svg>
                        50%
                      </div>
                    </td>
                    <td className="text-sm leading-none text-center flex justify-center text-gray-700  py-7">
                      <div className="flex items-center gap-2">
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#3F6CAF" />
                          </svg>
                          1
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#3F6CAF" />
                          </svg>
                          2
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#3F6CAF" />
                          </svg>
                          3
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#3F6CAF" />
                          </svg>
                          4
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#3F6CAF" />
                          </svg>
                          5
                        </div>
                      </div>
                    </td>
                    <td className="text-sm leading-none text-gray-600 text-center py-7 font-extrabold">
                      120
                    </td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="text-sm leading-none text-gray-700 text-left py-7 pr-8 pl-6 pr-2">
                      5
                    </td>
                    <td className="text-sm leading-none text-gray-700 text-left py-7 pr-8 font-medium">
                      New plinko imprementation
                    </td>
                    <td className="text-sm px-4 leading-none text-gray-700 text-left py-7 font-medium">
                      <input
                        className="w-[88px] px-10 py-4 border rounded-lg border-gray-200"
                        placeholder="7"
                      />
                    </td>
                    <td className="text-sm leading-none text-gray-700 text-left py-7 font-medium">
                      <div className="flex items-center gap-2">
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#11998E" />
                          </svg>
                          1
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#11998E" />
                          </svg>
                          2
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#11998E" />
                          </svg>
                          3
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#11998E" />
                          </svg>
                          4
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#11998E" />
                          </svg>
                          5
                        </div>
                      </div>
                    </td>
                    <td className="text-sm leading-none text-gray-700 text-center py-7 font-medium">
                      <div className="flex flex-col gap-2 items-center justify-center">
                        <svg
                          width={30}
                          height={30}
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx={15} cy={15} r={15} fill="#11998E" />
                          <path
                            d="M15 0C11.0218 -4.74401e-08 7.20644 1.58035 4.3934 4.3934C1.58035 7.20644 3.47789e-07 11.0218 0 15C-3.47789e-07 18.9782 1.58035 22.7936 4.3934 25.6066C7.20644 28.4196 11.0218 30 15 30L15 15L15 0Z"
                            fill="#EAECF0"
                          />
                        </svg>
                        50%
                      </div>
                    </td>
                    <td className="text-sm leading-none text-center flex justify-center text-gray-700  py-7">
                      <div className="flex items-center gap-2">
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#3F6CAF" />
                          </svg>
                          1
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#3F6CAF" />
                          </svg>
                          2
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#3F6CAF" />
                          </svg>
                          3
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#3F6CAF" />
                          </svg>
                          4
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#3F6CAF" />
                          </svg>
                          5
                        </div>
                      </div>
                    </td>
                    <td className="text-sm leading-none text-gray-600 text-center py-7 font-extrabold">
                      120
                    </td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="text-sm leading-none text-gray-700 text-left py-7 pr-8 pl-6 pr-2">
                      6
                    </td>
                    <td className="text-sm leading-none text-gray-700 text-left py-7 pr-8 font-medium">
                      Weapon upgrades in game
                    </td>
                    <td className="text-sm px-4 leading-none text-gray-700 text-left py-7 font-medium">
                      <input
                        className="w-[88px] px-10 py-4 border rounded-lg border-gray-200"
                        placeholder="7"
                      />
                    </td>
                    <td className="text-sm leading-none text-gray-700 text-left py-7 font-medium">
                      <div className="flex items-center gap-2">
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#11998E" />
                          </svg>
                          1
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#11998E" />
                          </svg>
                          2
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#11998E" />
                          </svg>
                          3
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#11998E" />
                          </svg>
                          4
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#11998E" />
                          </svg>
                          5
                        </div>
                      </div>
                    </td>
                    <td className="text-sm leading-none text-gray-700 text-center py-7 font-medium">
                      <div className="flex flex-col gap-2 items-center justify-center">
                        <svg
                          width={30}
                          height={30}
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx={15} cy={15} r={15} fill="#11998E" />
                          <path
                            d="M15 0C11.0218 -4.74401e-08 7.20644 1.58035 4.3934 4.3934C1.58035 7.20644 3.47789e-07 11.0218 0 15C-3.47789e-07 18.9782 1.58035 22.7936 4.3934 25.6066C7.20644 28.4196 11.0218 30 15 30L15 15L15 0Z"
                            fill="#EAECF0"
                          />
                        </svg>
                        50%
                      </div>
                    </td>
                    <td className="text-sm leading-none text-center flex justify-center text-gray-700  py-7">
                      <div className="flex items-center gap-2">
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#3F6CAF" />
                          </svg>
                          1
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#3F6CAF" />
                          </svg>
                          2
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#3F6CAF" />
                          </svg>
                          3
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#3F6CAF" />
                          </svg>
                          4
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#3F6CAF" />
                          </svg>
                          5
                        </div>
                      </div>
                    </td>
                    <td className="text-sm leading-none text-gray-600 text-center py-7 font-extrabold">
                      120
                    </td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="text-sm leading-none text-gray-700 text-left py-7 pr-8 pl-6 pr-2">
                      7
                    </td>
                    <td className="text-sm leading-none text-gray-700 text-left py-7 pr-8 font-medium">
                      Weapon upgrades in game
                    </td>
                    <td className="text-sm px-4 leading-none text-gray-700 text-left py-7 font-medium">
                      <input
                        className="w-[88px] px-10 py-4 border rounded-lg border-gray-200"
                        placeholder="7"
                      />
                    </td>
                    <td className="text-sm leading-none text-gray-700 text-left py-7 font-medium">
                      <div className="flex items-center gap-2">
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#11998E" />
                          </svg>
                          1
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#11998E" />
                          </svg>
                          2
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#11998E" />
                          </svg>
                          3
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#11998E" />
                          </svg>
                          4
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#11998E" />
                          </svg>
                          5
                        </div>
                      </div>
                    </td>
                    <td className="text-sm leading-none text-gray-700 text-center py-7 font-medium">
                      <div className="flex flex-col gap-2 items-center justify-center">
                        <svg
                          width={30}
                          height={30}
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx={15} cy={15} r={15} fill="#11998E" />
                          <path
                            d="M15 0C11.0218 -4.74401e-08 7.20644 1.58035 4.3934 4.3934C1.58035 7.20644 3.47789e-07 11.0218 0 15C-3.47789e-07 18.9782 1.58035 22.7936 4.3934 25.6066C7.20644 28.4196 11.0218 30 15 30L15 15L15 0Z"
                            fill="#EAECF0"
                          />
                        </svg>
                        50%
                      </div>
                    </td>
                    <td className="text-sm leading-none text-center flex justify-center text-gray-700  py-7">
                      <div className="flex items-center gap-2">
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#3F6CAF" />
                          </svg>
                          1
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#3F6CAF" />
                          </svg>
                          2
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#3F6CAF" />
                          </svg>
                          3
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#3F6CAF" />
                          </svg>
                          4
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#3F6CAF" />
                          </svg>
                          5
                        </div>
                      </div>
                    </td>
                    <td className="text-sm leading-none text-gray-600 text-center py-7 font-extrabold">
                      15
                    </td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="text-sm leading-none text-gray-700 text-left py-7 pr-8 pl-6 pr-2">
                      8
                    </td>
                    <td className="text-sm leading-none text-gray-700 text-left py-7 pr-8 font-medium">
                      A giant waterslide level as a n...
                    </td>
                    <td className="text-sm px-4 leading-none text-gray-700 text-left py-7 font-medium">
                      <input
                        className="w-[88px] px-10 py-4 border rounded-lg border-gray-200"
                        placeholder="7"
                      />
                    </td>
                    <td className="text-sm leading-none text-gray-700 text-left py-7 font-medium">
                      <div className="flex items-center gap-2">
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#11998E" />
                          </svg>
                          1
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#11998E" />
                          </svg>
                          2
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#11998E" />
                          </svg>
                          3
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#11998E" />
                          </svg>
                          4
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#11998E" />
                          </svg>
                          5
                        </div>
                      </div>
                    </td>
                    <td className="text-sm leading-none text-gray-700 text-center py-7 font-medium">
                      <div className="flex flex-col gap-2 items-center justify-center">
                        <svg
                          width={30}
                          height={30}
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx={15} cy={15} r={15} fill="#11998E" />
                          <path
                            d="M15 0C11.0218 -4.74401e-08 7.20644 1.58035 4.3934 4.3934C1.58035 7.20644 3.47789e-07 11.0218 0 15C-3.47789e-07 18.9782 1.58035 22.7936 4.3934 25.6066C7.20644 28.4196 11.0218 30 15 30L15 15L15 0Z"
                            fill="#EAECF0"
                          />
                        </svg>
                        50%
                      </div>
                    </td>
                    <td className="text-sm leading-none text-center flex justify-center text-gray-700  py-7">
                      <div className="flex items-center gap-2">
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#3F6CAF" />
                          </svg>
                          1
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#3F6CAF" />
                          </svg>
                          2
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#3F6CAF" />
                          </svg>
                          3
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#3F6CAF" />
                          </svg>
                          4
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={8} cy={8} r={8} fill="#3F6CAF" />
                          </svg>
                          5
                        </div>
                      </div>
                    </td>
                    <td className="text-sm leading-none text-gray-600 text-center py-7 font-extrabold">
                      7.5
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
