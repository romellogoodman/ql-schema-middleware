'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _utilities = require('graphql/utilities');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (graphql, schema) {
  if (!schema) {
    throw new Error('QL-Schema-Middleware requires a schema.');
  }

  return function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res) {
      var result;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return graphql(schema, _utilities.introspectionQuery);

            case 2:
              result = _context.sent;


              if (result.errors) {
                res.send({ error: 'ERROR introspecting schema' });
              } else {
                res.send((0, _stringify2.default)(result, null, 2));
              }

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));
    return function (_x, _x2) {
      return ref.apply(this, arguments);
    };
  }();
};