import { html } from "lit";

import "../scss/Cube.scss";

/**
 * Primary UI component for user interaction
 */
export const Cube = ({ isOpen, orientation, onClick }) => {
  const mode = isOpen ? "open" : "";

  return html`
    <div
      class=${["booster-box", `show-${orientation || "top"}`, mode].join(" ")}
      @click=${onClick}
    >
      <div class="booster-box__box">
        <div class="booster-box__face booster-box__face--front"></div>
        <div class="booster-box__face booster-box__face--back"></div>
        <div class="booster-box__face booster-box__face--right"></div>
        <div class="booster-box__face booster-box__face--left"></div>
        <div class="booster-box__face booster-box__face--top"></div>
        <div class="booster-box__face booster-box__face--bottom"></div>
      </div>
    </div>
  `;
};
