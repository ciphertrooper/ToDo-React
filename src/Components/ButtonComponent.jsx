import React, { useEffect } from "react";

function ButtonComponent() {
  useEffect(() => {
    document.querySelectorAll(".button").forEach((button) =>
      button.addEventListener("click", (e) => {
        if (!button.classList.contains("delete")) {
          button.classList.add("delete");
          setTimeout(() => button.classList.remove("delete"), 2200);
        }
        e.preventDefault();
      })
    );
  }, []);

  return (
    <div>
      <style>
        {`
          .button {
            --background: crimson;
            --background-hover: red;
            --text: #fff;
            --icon: #fff;
            display: flex;
            outline: none;
            cursor: pointer;
            border: none;
            min-width: 113px;
            padding: 9px 20px 9px 12px;
            border-radius: 11px;
            line-height: 24px;
            font-family: inherit;
            font-weight: 600;
            font-size: 14px;
            overflow: hidden;
            color: var(--text);
            background: var(--b, var(--background));
            transition: transform 0.3s, background 0.4s;
            transform: scale(var(--scale, 1)) translateZ(0);
            -webkit-appearance: none;
            -webkit-tap-highlight-color: transparent;
            -webkit-mask-image: -webkit-radial-gradient(white, black);
          }

          .button:active {
            --scale: 0.95;
          }

          .button:hover {
            --b: var(--background-hover);
          }

          .button .icon,
          .button span {
            display: inline-block;
            vertical-align: top;
            transform: translateZ(0);
          }

          .button .icon {
            width: 24px;
            height: 24px;
            position: relative;
            z-index: 1;
            margin-right: 8px;
            color: var(--text);
          }

          .button .icon svg {
            width: 96px;
            height: 96px;
            display: block;
            position: absolute;
            left: -36px;
            top: -36px;
            will-change: transform;
            fill: var(--icon);
            transform: scale(0.254) translateZ(0);
            animation: var(--name, var(--name-top, none)) 700ms ease forwards;
          }

          .button .icon .bottom {
            --name: var(--name-bottom, none);
          }

          .button span {
            animation: var(--name-text, none) 700ms ease forwards;
          }

          .button.delete {
            --name-top: trash-top;
            --name-bottom: trash-bottom;
            --name-text: text;
          }

          @keyframes trash-bottom {
            25%,
            32% {
              transform: translate(32px, 19px) scale(1) translateZ(0);
            }
            70%,
            80% {
              transform: translate(32px, 0) scale(0.254) translateZ(0);
            }
            100% {
              transform: scale(0.254) translateZ(0);
            }
          }

          @keyframes trash-top {
            25%,
            32% {
              transform: translate(38px, 4px) scale(1) rotate(-20deg) translateZ(0);
            }
            70%,
            80% {
              transform: translate(32px, 0) scale(0.254) translateZ(0);
            }
            100% {
              transform: scale(0.254) translateZ(0);
            }
          }

          @keyframes text {
            25% {
              transform: translate(-4px, -4px) rotate(-20deg) translateZ(0);
            }
            70% {
              opacity: 1;
              transform: translate(-12px, 48px) rotate(-80deg) scale(0.2)
                translateZ(0);
            }
            71% {
              opacity: 0;
            }
            72%,
            90% {
              opacity: 0;
              transform: translateZ(0);
            }
            100% {
              opacity: 1;
            }
          }

          html {
            box-sizing: border-box;
            -webkit-font-smoothing: antialiased;
          }

          * {
            box-sizing: inherit;
            &:before,
            &:after {
              box-sizing: inherit;
            }
          }

          .dribbble {
            position: fixed;
            display: block;
            right: 20px;
            bottom: 20px;
          }

          .dribbble img {
            display: block;
            height: 28px;
          }

          .twitter {
            position: fixed;
            display: block;
            right: 64px;
            bottom: 14px;
          }

          .twitter svg {
            width: 32px;
            height: 32px;
            fill: #1da1f2;
          }
        `}
      </style>
      <button className="button">
        <div className="icon">
          <svg className="top">
            <use xlinkHref="#top"></use>
          </svg>
          <svg className="bottom">
            <use xlinkHref="#bottom"></use>
          </svg>
        </div>
        <span>Delete</span>
      </button>

      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="top">
          <path
            d="M15,4 C15.5522847,4 16,4.44771525 16,5 L16,6 L18.25,6 C18.6642136,6 19,6.33578644 19,6.75 C19,7.16421356 18.6642136,7.5 18.25,7.5 L5.75,7.5 C5.33578644,7.5 5,7.16421356 5,6.75 C5,6.33578644 5.33578644,6 5.75,6 L8,6 L8,5 C8,4.44771525 8.44771525,4 9,4 L15,4 Z M14,5.25 L10,5.25 C9.72385763,5.25 9.5,5.47385763 9.5,5.75 C9.5,5.99545989 9.67687516,6.19960837 9.91012437,6.24194433 L10,6.25 L14,6.25 C14.2761424,6.25 14.5,6.02614237 14.5,5.75 C14.5,5.50454011 14.3231248,5.30039163 14.0898756,5.25805567 L14,5.25 Z"
          ></path>
        </symbol>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="bottom"
        >
          <path
            d="M16.9535129,8 C17.4663488,8 17.8890201,8.38604019 17.9467852,8.88337887 L17.953255,9.02270969 L17.953255,9.02270969 L17.5309272,18.3196017 C17.5119599,18.7374363 17.2349366,19.0993109 16.8365446,19.2267053 C15.2243631,19.7422351 13.6121815,20 12,20 C10.3878264,20 8.77565288,19.7422377 7.16347932,19.226713 C6.76508717,19.0993333 6.48806648,18.7374627 6.46907425,18.3196335 L6.04751853,9.04540766 C6.02423185,8.53310079 6.39068134,8.09333626 6.88488406,8.01304774 L7.02377738,8.0002579 L16.9535129,8 Z M9.75,10.5 C9.37030423,10.5 9.05650904,10.719453 9.00684662,11.0041785 L9,11.0833333 L9,16.9166667 C9,17.2388328 9.33578644,17.5 9.75,17.5 C10.1296958,17.5 10.443491,17.280547 10.4931534,16.9958215 L10.5,16.9166667 L10.5,11.0833333 C10.5,10.7611672 10.1642136,10.5 9.75,10.5 Z M14.25,10.5 C13.8703042,10.5 13.556509,10.719453 13.5068466,11.0041785 L13.5,11.0833333 L13.5,16.9166667 C13.5,17.2388328 13.8357864,17.5 14.25,17.5 C14.6296958,17.5 14.943491,17.280547 14.9931534,16.9958215 L15,16.9166667 L15,11.0833333 C15,10.7611672 14.6642136,10.5 14.25,10.5 Z"
          ></path>
        </symbol>
      </svg>
    </div>
  );
}

export default ButtonComponent;
