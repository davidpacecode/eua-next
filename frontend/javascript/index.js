import "$styles/index.css"
import "$styles/syntax-highlighting.css"
import * as Turbo from "@hotwired/turbo"
import { Application } from "@hotwired/stimulus"

// Example Web Awesome components. Mix 'n' match however you like!
import "./webawesome/dist/components/button/button.js"
import "./webawesome/dist/components/icon/icon.js"
import "./webawesome/dist/components/spinner/spinner.js"
import "./webawesome/dist/components/page/page.js";
import "./webawesome/dist/components/card/card.js";
import "./webawesome/dist/components/avatar/avatar.js";
import "./webawesome/dist/components/format-date/format-date.js";
import "./webawesome/dist/components/tooltip/tooltip.js";
import "./webawesome/dist/components/divider/divider.js";

/**
 * Adds support for declarative shadow DOM. Requires your HTML <head> to include:
 * `<meta name="turbo-cache-control" content="no-cache" />`
 */
import * as TurboShadow from "turbo-shadow"

/**
 * Uncomment the line below to add transition animations when Turbo navigates.
 * Use data-turbo-transition="false" on your <main> element for pages where
 * you don't want any transition animation.
 */
import "./turbo_transitions.js"

// Import all JavaScript & CSS files from src/_components
import components from "$components/**/*.{js,jsx,js.rb,css}"

console.info("Bridgetown is loaded!")

window.Stimulus = Application.start()

import controllers from "./controllers/**/*.{js,js.rb}"
Object.entries(controllers).forEach(([filename, controller]) => {
  if (filename.includes("_controller.") || filename.includes("-controller.")) {
    const identifier = filename.replace("./controllers/", "")
      .replace(/[_-]controller\..*$/, "")
      .replace(/_/g, "-")
      .replace(/\//g, "--")

    Stimulus.register(identifier, controller.default)
  }
})
