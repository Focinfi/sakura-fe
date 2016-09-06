import api from './api.js'

export default {
  tip: "Help you, help me",
  name: 'tip',

  fetchTip({ userID }) {
    return api.fetch({
      name: this.name,
      body: {action: "generate_new"}
    })
  }
}
