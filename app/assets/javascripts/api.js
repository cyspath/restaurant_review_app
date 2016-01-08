var Api = new _.extend({}, {

  token: function() {
    var el = document.querySelector('meta[name="csrf-token"]')
    return el ? el.getAttribute('content') : "";
  },

  headers: function() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': this.token(),
      'X-Requested-With': 'XMLHttpRequest'
    }
  },

  post: function(route, params) {
    return fetch(`${route}.json`, _.merge({
      method: 'post',
      credentials: 'include',
      headers: this.headers()
    }, { body: JSON.stringify(params) }))
  }

});
