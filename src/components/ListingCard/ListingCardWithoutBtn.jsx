import Image from "next/image";
import Link from "next/link";
import React from "react";
import locationIcon from "../../assets/icons/location-icon.svg";
import femaleIcon from "../../assets/icons/female-icon.svg";
import ratingIcon from "../../assets/icons/rating-star-icon.svg";
import { IMAGES_PATH } from "@/config/constants";
function CardWithoutBtn({item, pic, topIcon }) {
  const cardStatus = () => {
    switch (topIcon) {
      case 1:
        return (
          <svg
            width="62"
            height="61"
            viewBox="0 0 62 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.1542 0.00169246L0.849915 29.3059V58.8151L59.595 0.00169246H30.1542Z"
              fill="#E6014D"
            />
            <path
              d="M4.34729 60.2527L3.99021 55.6574L0.851862 58.8093L4.34729 60.2527Z"
              fill="#7E012A"
            />
            <path
              d="M61.7857 3.81869L56.1484 3.41383L59.5884 0L61.7857 3.81869Z"
              fill="#7E012A"
            />
            <path
              d="M13.8321 26.6611L14.8362 27.6652L16.4555 26.0459L17.3889 26.9793L15.7696 28.5986L16.8586 29.6875L18.69 27.8561L19.6587 28.8249L16.6181 31.8654L11.6543 26.9015L14.6948 23.861L15.6635 24.8297L13.8321 26.6611ZM20.7195 25.8973L22.3034 24.3134L23.2368 25.2468L20.4437 28.0399L15.4798 23.076L16.689 21.8668L20.7195 25.8973ZM20.0588 18.497L25.0227 23.4609L23.8135 24.6701L18.8496 19.7062L20.0588 18.497ZM24.5059 14.0499L25.4747 15.0186L24.1594 16.3338L28.1546 20.329L26.9454 21.5381L22.9503 17.543L21.6351 18.8582L20.6663 17.8895L24.5059 14.0499ZM27.2906 13.2026L28.2947 14.2067L29.914 12.5874L30.8474 13.5208L29.2281 15.1401L30.3171 16.229L32.1485 14.3976L33.1172 15.3664L30.0766 18.4069L25.1128 13.443L28.1533 10.4025L29.1221 11.3712L27.2906 13.2026Z"
              fill="white"
            />
          </svg>
        );
      case 2:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="61"
            height="61"
            viewBox="0 0 61 61"
            fill="none"
          >
            <path
              d="M29.3043 0.00169246L0 29.3059V58.8151L58.7451 0.00169246H29.3043Z"
              fill="#ce2029"
            />
            <path
              d="M3.49737 60.2527L3.1403 55.6574L0.00194781 58.8093L3.49737 60.2527Z"
              fill="#ce2029"
            />
            <path
              d="M60.9358 3.81869L55.2985 3.41383L58.7385 0L60.9358 3.81869Z"
              fill="#ce2029"
            />
            <path
              d="M6.74601 36.8026L7.64969 37.7063L9.10704 36.249L9.94708 37.089L8.48973 38.5464L9.46978 39.5264L11.118 37.8781L11.9899 38.75L9.25341 41.4865L4.78591 37.019L7.52241 34.2825L8.39427 35.1544L6.74601 36.8026ZM15.4329 35.307L13.1546 34.8488L13.721 37.0189L12.4864 38.2535L11.6464 34.5497L7.98708 33.8178L9.25351 32.5514L11.5 33.0032L10.94 30.865L12.1746 29.6303L13.0082 33.3024L16.6993 34.0406L15.4329 35.307ZM14.821 31.4387C14.3797 30.9975 14.0828 30.5096 13.93 29.975C13.773 29.4362 13.7688 28.9016 13.9173 28.3713C14.0658 27.8325 14.3564 27.3467 14.7892 26.9139C15.3195 26.3836 15.9135 26.0696 16.5711 25.9721C17.2287 25.8745 17.863 26.0039 18.4739 26.3603L17.2775 27.5567C17.0017 27.4591 16.7323 27.4443 16.4692 27.5121C16.2104 27.5758 15.9771 27.7115 15.7692 27.9194C15.434 28.2546 15.2792 28.6428 15.3046 29.084C15.3301 29.5253 15.538 29.9411 15.9283 30.3314C16.3186 30.7217 16.7344 30.9296 17.1756 30.955C17.6169 30.9805 18.0051 30.8256 18.3403 30.4905C18.5481 30.2826 18.6839 30.0492 18.7475 29.7904C18.8154 29.5274 18.8006 29.258 18.703 28.9822L19.8994 27.7858C20.2558 28.3967 20.3852 29.031 20.2876 29.6886C20.1858 30.342 19.8697 30.9338 19.3394 31.4642C18.9066 31.8969 18.423 32.1897 17.8884 32.3424C17.3538 32.4866 16.8193 32.4824 16.2847 32.3297C15.7501 32.1769 15.2622 31.8799 14.821 31.4387ZM22.3414 26.7184L23.7669 25.2929L24.607 26.133L22.0932 28.6467L17.6257 24.1792L18.7139 23.091L22.3414 26.7184ZM21.7277 20.0772L24.4005 22.7501C24.6678 23.0174 24.9393 23.1574 25.2151 23.1701C25.4909 23.1829 25.7561 23.0619 26.0106 22.8074C26.2652 22.5528 26.3882 22.2855 26.3797 22.0055C26.3712 21.7255 26.2334 21.4519 25.9661 21.1846L23.2932 18.5117L24.3814 17.4235L27.0479 20.09C27.4467 20.4888 27.6992 20.9109 27.8053 21.3564C27.9113 21.8019 27.8901 22.2389 27.7416 22.6674C27.5974 23.0916 27.3492 23.4798 26.997 23.832C26.6449 24.1841 26.2609 24.4323 25.8452 24.5766C25.4294 24.7123 25.003 24.7229 24.566 24.6084C24.1248 24.4896 23.7047 24.2308 23.3059 23.832L20.6394 21.1655L21.7277 20.0772ZM31.2741 19.5549C30.9474 19.8816 30.6016 20.1213 30.2368 20.274C29.8719 20.4268 29.507 20.4777 29.1422 20.4268C28.7816 20.3716 28.4506 20.2019 28.1494 19.9176L29.3076 18.7594C29.4901 18.9079 29.6746 18.9779 29.8613 18.9694C30.0437 18.9567 30.2134 18.8718 30.3704 18.7149C30.5316 18.5536 30.6229 18.3903 30.6441 18.2248C30.661 18.0551 30.6038 17.9045 30.4722 17.773C30.3619 17.6627 30.2325 17.6097 30.084 17.6139C29.9398 17.6139 29.7892 17.6457 29.6322 17.7094C29.4795 17.7688 29.2737 17.8685 29.0149 18.0085C28.6373 18.2079 28.3127 18.3542 28.0412 18.4476C27.7697 18.5409 27.4812 18.5664 27.1757 18.5239C26.8702 18.4815 26.5775 18.3203 26.2975 18.0403C25.8817 17.6245 25.7078 17.1493 25.7756 16.6148C25.8393 16.0759 26.1129 15.5647 26.5966 15.081C27.0887 14.5889 27.6042 14.311 28.143 14.2474C28.6776 14.1795 29.1655 14.3449 29.6067 14.7437L28.4294 15.9211C28.2767 15.7853 28.1112 15.7259 27.933 15.7429C27.7506 15.7556 27.583 15.8383 27.4303 15.9911C27.2988 16.1226 27.2287 16.2647 27.2203 16.4175C27.2075 16.566 27.2669 16.706 27.3985 16.8375C27.5427 16.9817 27.723 17.0263 27.9394 16.9711C28.1558 16.916 28.4549 16.7908 28.8367 16.5957C29.2228 16.4047 29.5495 16.2647 29.8168 16.1756C30.0883 16.0823 30.3747 16.0547 30.6759 16.0929C30.9771 16.1311 31.2614 16.2838 31.5287 16.5511C31.7832 16.8057 31.9487 17.1027 32.0251 17.4421C32.1057 17.7772 32.0845 18.1294 31.9614 18.4985C31.8384 18.8676 31.6093 19.2197 31.2741 19.5549ZM30.1492 11.6557L34.6167 16.1232L33.5284 17.2115L29.0609 12.744L30.1492 11.6557ZM35.1317 6.67325L38.0145 12.7254L36.6526 14.0873L30.6005 11.2044L31.7588 10.0462L36.239 12.3117L33.9798 7.82513L35.1317 6.67325ZM37.5466 6.00205L38.4503 6.90574L39.9076 5.44839L40.7477 6.28843L39.2903 7.74578L40.2704 8.72583L41.9186 7.07756L42.7905 7.94942L40.054 10.6859L35.5865 6.21843L38.323 3.48192L39.1949 4.35379L37.5466 6.00205Z"
              fill="white"
            />
          </svg>
        );
      case 3:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="61"
            height="61"
            viewBox="0 0 61 61"
            fill="none"
          >
            <path
              d="M29.3043 0.00169246L0 29.3059V58.8151L58.7451 0.00169246H29.3043Z"
              fill="#ce2029"
            />
            <path
              d="M3.49737 60.2527L3.1403 55.6574L0.00194781 58.8093L3.49737 60.2527Z"
              fill="#ce2029"
            />
            <path
              d="M60.9358 3.81869L55.2985 3.41383L58.7385 0L60.9358 3.81869Z"
              fill="#ce2029"
            />
            <path
              d="M16.7548 27.9266C17.0136 28.1854 17.1918 28.4824 17.2894 28.8176C17.3827 29.1485 17.3721 29.5027 17.2576 29.8803C17.143 30.2579 16.9033 30.6292 16.5385 30.994L15.8639 31.6686L17.4676 33.2723L16.3794 34.3606L11.9119 29.8931L13.6747 28.1302C14.031 27.7739 14.3938 27.5342 14.7629 27.4111C15.132 27.2881 15.4863 27.2732 15.8257 27.3666C16.1651 27.4599 16.4748 27.6466 16.7548 27.9266ZM15.5902 30.2113C15.7981 30.0034 15.9042 29.7997 15.9084 29.6003C15.9127 29.4009 15.8257 29.2121 15.6475 29.0339C15.4693 28.8557 15.2805 28.7688 15.0811 28.773C14.8817 28.7772 14.6781 28.8833 14.4702 29.0912L13.8783 29.6831L14.9984 30.8031L15.5902 30.2113ZM22.6289 28.111L20.0133 27.3537L19.7524 27.6146L21.4388 29.3011L20.3506 30.3893L15.8831 25.9218L17.7096 24.0953C18.0617 23.7432 18.4223 23.5056 18.7914 23.3826C19.1648 23.2553 19.5212 23.2383 19.8606 23.3317C20.1958 23.4208 20.4949 23.5968 20.7579 23.8599C21.0549 24.1569 21.2352 24.5069 21.2988 24.9099C21.3667 25.3087 21.2861 25.7203 21.057 26.1445L23.8572 26.8828L22.6289 28.111ZM18.9824 26.8446L19.6569 26.17C19.8563 25.9706 19.956 25.7733 19.956 25.5781C19.9603 25.3787 19.8733 25.1899 19.6951 25.0118C19.5254 24.842 19.3409 24.7593 19.1415 24.7636C18.9463 24.7636 18.749 24.8633 18.5496 25.0627L17.875 25.7372L18.9824 26.8446ZM21.1228 20.6821L25.5903 25.1496L24.5021 26.2378L20.0346 21.7703L21.1228 20.6821ZM26.9708 14.8341L31.4383 19.3016L30.3501 20.3898L27.6709 17.7106L29.3509 21.389L28.4727 22.2672L24.7816 20.5871L27.4672 23.2727L26.379 24.3609L21.9115 19.8934L23.197 18.6079L27.5436 20.4471L25.6917 16.1132L26.9708 14.8341ZM29.7135 13.8351L30.6172 14.7388L32.0745 13.2815L32.9146 14.1215L31.4572 15.5789L32.4373 16.5589L34.0855 14.9107L34.9574 15.7825L32.2209 18.519L27.7534 14.0515L30.4899 11.315L31.3618 12.1869L29.7135 13.8351Z"
              fill="white"
            />
          </svg>
        );
      case 4:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="61"
            height="61"
            viewBox="0 0 61 61"
            fill="none"
          >
            <path
              d="M29.3043 0.00169246L0 29.3059V58.8151L58.7451 0.00169246H29.3043Z"
              fill="#ce2029"
            />
            <path
              d="M3.49737 60.2527L3.1403 55.6574L0.00194781 58.8093L3.49737 60.2527Z"
              fill="#ce2029"
            />
            <path
              d="M60.9358 3.81869L55.2985 3.41383L58.7385 0L60.9358 3.81869Z"
              fill="#ce2029"
            />
            <path
              d="M11.5902 33.0912C11.849 33.35 12.0272 33.647 12.1248 33.9821C12.2182 34.3131 12.2075 34.6673 12.093 35.0449C11.9784 35.4225 11.7387 35.7937 11.3739 36.1586L10.6993 36.8332L12.303 38.4369L11.2148 39.5251L6.74727 35.0576L8.51008 33.2948C8.86646 32.9384 9.22921 32.6987 9.59832 32.5757C9.96743 32.4527 10.3217 32.4378 10.6611 32.5312C11.0005 32.6245 11.3102 32.8112 11.5902 33.0912ZM10.4256 35.3758C10.6335 35.168 10.7396 34.9643 10.7438 34.7649C10.7481 34.5655 10.6611 34.3767 10.4829 34.1985C10.3047 34.0203 10.1159 33.9333 9.91652 33.9376C9.71711 33.9418 9.51347 34.0479 9.30558 34.2558L8.71373 34.8476L9.83379 35.9677L10.4256 35.3758ZM17.4643 33.2756L14.8487 32.5183L14.5878 32.7792L16.2743 34.4656L15.186 35.5539L10.7185 31.0864L12.545 29.2599C12.8971 28.9078 13.2577 28.6702 13.6269 28.5472C14.0002 28.4199 14.3566 28.4029 14.696 28.4963C15.0312 28.5853 15.3303 28.7614 15.5933 29.0245C15.8903 29.3214 16.0706 29.6715 16.1343 30.0745C16.2021 30.4733 16.1215 30.8849 15.8924 31.3091L18.6926 32.0473L17.4643 33.2756ZM13.8178 32.0092L14.4924 31.3346C14.6918 31.1352 14.7915 30.9379 14.7915 30.7427C14.7957 30.5433 14.7087 30.3545 14.5305 30.1763C14.3608 30.0066 14.1763 29.9239 13.9769 29.9281C13.7817 29.9281 13.5844 30.0278 13.385 30.2273L12.7104 30.9018L13.8178 32.0092ZM16.8301 26.7185L17.7338 27.6222L19.1911 26.1649L20.0312 27.0049L18.5738 28.4622L19.5539 29.4423L21.2022 27.794L22.074 28.6659L19.3375 31.4024L14.87 26.9349L17.6065 24.1984L18.4784 25.0703L16.8301 26.7185ZM23.3724 18.4325L27.8399 22.9L26.7516 23.9883L24.0724 21.3091L25.7525 24.9874L24.8743 25.8657L21.1832 24.1856L23.8688 26.8712L22.7805 27.9594L18.313 23.4919L19.5985 22.2064L23.9451 24.0456L22.0932 19.7117L23.3724 18.4325ZM25.2432 16.5617L29.7107 21.0292L28.6224 22.1175L24.1549 17.65L25.2432 16.5617ZM27.101 14.704L29.7738 17.3768C30.0411 17.6441 30.3126 17.7841 30.5884 17.7968C30.8642 17.8096 31.1293 17.6887 31.3839 17.4341C31.6385 17.1795 31.7615 16.9123 31.753 16.6322C31.7445 16.3522 31.6066 16.0786 31.3394 15.8113L28.6665 13.1384L29.7547 12.0502L32.4212 14.7167C32.82 15.1155 33.0725 15.5376 33.1785 15.9831C33.2846 16.4286 33.2634 16.8656 33.1149 17.2941C32.9706 17.7184 32.7225 18.1066 32.3703 18.4587C32.0182 18.8108 31.6342 19.059 31.2184 19.2033C30.8027 19.339 30.3763 19.3497 29.9393 19.2351C29.498 19.1163 29.078 18.8575 28.6792 18.4587L26.0127 15.7922L27.101 14.704ZM35.5782 6.22667L40.0457 10.6942L38.9575 11.7824L36.2783 9.10318L37.9584 12.7815L37.0801 13.6598L33.389 11.9797L36.0746 14.6653L34.9864 15.7535L30.5189 11.286L31.8044 10.0005L36.151 11.8397L34.2991 7.50582L35.5782 6.22667Z"
              fill="white"
            />
          </svg>
        );
      default:
        return "";
    }
  };

  return (
    <Link
      className="elite_card_without_shadow flex flex-col group overflow-hidden hover:shadow-lg focus:outline-none focus:shadow-lg transition"
      id="elite_card"
      href={"/therapist-profile/"+item?.slug}
    >
      <div className="relative overflow-hidden">
         {item?.profile_image && item?.profile_image.length>0? 
          <Image
             className="size-full message-image relative top-0 start-0 group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-t-md h-[265px]"
            src={IMAGES_PATH+'/'+item?.profile_image[0]?.file }
            width={100}
            height={100}
            alt={item?.title+" Image"}
          />
          :<></>}
        
        <div className="absolute -left-[1px] top-0 ">{cardStatus()}</div>
      </div>
      <div className="">
        <div className="p-3 fs-18-700-lato lh-27 text-color-black">
          {item?.title}{" "}
        </div>
        <div className="flex flex-col mb-3">
          <div className="flex items-center px-3 py-1 gap-2.5">
            <Image src={locationIcon} alt="location" />
            <div className="fs-14-500-lato txt-color-gray600 lh-21">
            {item?.region?.name}
            </div>
          </div>
          <div className="flex items-center px-3 py-1 gap-2.5">
            <Image src={femaleIcon} alt="female icon" />
            <div className="fs-14-500-lato txt-color-gray600 lh-21">{item?.category== 'Female Therapist' ? 'Female':(item?.category== 'Male Therapist' ? 'Male': item?.category)}</div>
          </div>
          <div className="flex items-center px-3 py-1 gap-2.5">
            <Image src={ratingIcon} alt="rating star" />
            <div className="fs-14-500-lato txt-color-gray600 lh-21">
            {item?.reviews_avg_rating >0? item?.reviews_avg_rating.toFixed(1):0 } ({item?.reviews?.length})
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CardWithoutBtn;
