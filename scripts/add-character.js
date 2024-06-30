import { createJournalEntry } from "./create-entry.js"
import { DOCUMENT_NAME, ID, TEMPLATES } from "./model/constants.js"

class AddCharacterApplication extends FormApplication {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: [ID],
      template: TEMPLATES.DEFAULT,
      width: 400,
      height: 400,
      resizable: true,
      minimizable: true,
      popOut: true,
      title: DOCUMENT_NAME,
    })
  }

  async _updateObject(event, formData) {
    const character = {
      name: formData.name,
      race: formData.race,
      genderExpression: formData.genderExpression,
      firstMet: formData.firstMet,
      generatedTraits: formData.generatedTraits,
      physicalDescription:
        formData.physicalDescription || "~PHYSICAL DESCRIPTION~",
      notes: formData.notes || "-",
    }

    createJournalEntry(character)
  }

  _getHeaderButtons() {
    return [
      {
        label: "",
        class: "minimize",
        icon: "far fa-window-minimize",
        onclick: function () {
          if (this._minimized) this.maximize()
          else {
            this.minimize()
            //* Dirty hack to prevent "double minimize" after rapidly double-clicking on the minimize button
            var _bkpMinimize = this.minimize
            this.minimize = () => {}
            setTimeout(() => {
              this.minimize = _bkpMinimize
            }, 200)
          }
        }.bind(this),
      },
      {
        label: "",
        class: "close",
        icon: "fas fa-times",
        onclick: () => this.close(),
      },
    ]
  }
}

export class AddCharacter {
  // getSceneControlButtons(sceneControlButtons) {
  //   const notesButton = sceneControlButtons.find(
  //     (button) => button.name === "notes",
  //   )

  //   notesButton.tools.push({
  //     name: "xp-tracker",
  //     title: "XP Tracker",
  //     icon: "fas fa-chart-line",
  //     visible: true,
  //     onClick: () => {
  //       this.application.render(true, {
  //         focus: true,
  //       })
  //     },
  //   })
  // }

  constructor() {
    this.application = new AddCharacterApplication()
  }

  render() {
    this.application.render(true)
  }
}

// Hooks.once("ready", async function () {
//   const addCharacter = new AddCharacter()

//   console.log("AddCharacter | Initializing", addCharacter)
// })

Hooks.on("renderJournalDirectory", (app, html, data) => {
  console.log("AddCharacter | renderJournalDirectory", app, html, data)
  html
    .find(".directory-header")
    .append(
      '<button class="add-character"><i class="fas fa-plus"></i> Add Character</button>',
    )
    .promise()
    .done(() => {
      $(".add-character").on("click", () => {
        console.log("AddCharacter | Add Character clicked")
        const addCharacter = new AddCharacter()
        addCharacter.render()
      })
    })
})

// Hooks.once("devModeReady", ({ registerPackageDebugFlag }) => {
//   registerPackageDebugFlag(AddCharacter.ID)
// })
