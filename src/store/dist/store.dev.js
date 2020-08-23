"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _axios = _interopRequireDefault(require("axios"));

var _vueAxios = _interopRequireDefault(require("vue-axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

_vue["default"].use(_vueAxios["default"], _axios["default"]);

var store = new _vuex["default"].Store({
  state: {
    set_Audois: [{}],
    set_RelatedAudois: [{}],
    set_SingelAudois: [{}]
  },
  getters: {
    all_audios: function all_audios(state) {
      return state.set_Audois;
    },
    singelaudio: function singelaudio(state) {
      return state.set_SingelAudois;
    },
    relatedAudois: function relatedAudois(state) {
      return state.set_RelatedAudois;
    }
  },
  actions: {
    fetchtodos: function fetchtodos(_ref) {
      var commit, _ref2, data;

      return regeneratorRuntime.async(function fetchtodos$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit = _ref.commit;
              _context.next = 3;
              return regeneratorRuntime.awrap(_axios["default"].get('https://cors-anywhere.herokuapp.com/https://api.soundcloud.com/playlists/286483654?client_id=a281614d7f34dc30b665dfcaa3ed7505'));

            case 3:
              _ref2 = _context.sent;
              data = _ref2.data;
              commit('setAudois', data.tracks);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      });
    },
    relatedMusic: function relatedMusic(_ref3, id) {
      var commit, _ref4, data;

      return regeneratorRuntime.async(function relatedMusic$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              commit = _ref3.commit;
              _context2.next = 3;
              return regeneratorRuntime.awrap(_axios["default"].get("https://cors-anywhere.herokuapp.com/https://api.soundcloud.com/tracks/".concat(id, "/related?client_id=a281614d7f34dc30b665dfcaa3ed7505")));

            case 3:
              _ref4 = _context2.sent;
              data = _ref4.data;
              commit('set_Related', data);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      });
    },
    get_song: function get_song(_ref5, id_song) {
      var commit = _ref5.commit;
      commit('setAudoisSingel', id_song);
    }
  },
  mutations: {
    setAudois: function setAudois(state, audios) {
      state.set_Audois = audios;
    },
    set_Related: function set_Related(state, related) {
      state.set_RelatedAudois = related;
    },
    setAudoisSingel: function setAudoisSingel(state, singel) {
      state.set_SingelAudois = {
        "title": "".concat(singel.title),
        "url": "https://api.soundcloud.com/tracks/".concat(singel.id, "/stream?client_id=a281614d7f34dc30b665dfcaa3ed7505")
      };
    }
  }
});
exports.store = store;