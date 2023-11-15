import { Application } from "@hotwired/stimulus"

const application = Application.start()
//= require i18n/translations
// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }
