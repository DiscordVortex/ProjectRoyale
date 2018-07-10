var _class4, _temp5, _style;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  display: inline-block;\n  position: relative;\n  transform: translate(', 'px, ', 'px);\n  ', ';\n'], ['\n  display: inline-block;\n  position: relative;\n  transform: translate(', 'px, ', 'px);\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  height: 50px;\n  width: 50px;\n  display: inline-block;\n  cursor: ', '-resize;\n  position: absolute;\n  transform: translate(calc(var(--x, 0) * 1%), calc(var(--y, 0) * 1%));\n  ', ' &:after {\n    background: #2eec71;\n    border-radius: 100%;\n    content: \'\';\n    height: 12px;\n    left: 50%;\n    position: absolute;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    width: 12px;\n  }\n'], ['\n  height: 50px;\n  width: 50px;\n  display: inline-block;\n  cursor: ', '-resize;\n  position: absolute;\n  transform: translate(calc(var(--x, 0) * 1%), calc(var(--y, 0) * 1%));\n  ', ' &:after {\n    background: #2eec71;\n    border-radius: 100%;\n    content: \'\';\n    height: 12px;\n    left: 50%;\n    position: absolute;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    width: 12px;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  from {\n    transform: translate(-50%, -50%) scale(0);\n  }\n'], ['\n  from {\n    transform: translate(-50%, -50%) scale(0);\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: inline-block;\n  position: relative;\n  ', ';\n'], ['\n  display: inline-block;\n  position: relative;\n  ', ';\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  background: ', ';\n  border-radius: 6px;\n  height: 200px;\n  width: 300px;\n'], ['\n  background: ', ';\n  border-radius: 6px;\n  height: 200px;\n  width: 300px;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n\n  ', ' ', ' path {\n    fill: ', ';\n  }\n\n  &[disabled] {\n    background: #ddd;\n  }\n\n  &:hover path {\n    fill: ', ';\n  }\n'], ['\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n\n  ', ' ', ' path {\n    fill: ', ';\n  }\n\n  &[disabled] {\n    background: #ddd;\n  }\n\n  &:hover path {\n    fill: ', ';\n  }\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  display: flex;\n  align-items center;\n  justify-content: center;\n  padding: 10px;\n'], ['\n  display: flex;\n  align-items center;\n  justify-content: center;\n  padding: 10px;\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  height: 24px;\n  width: 24px;\n'], ['\n  height: 24px;\n  width: 24px;\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n  position: relative;\n'], ['\n  position: relative;\n']),
    _templateObject10 = _taggedTemplateLiteral(['\n  color: #ddd;\n  position: absolute;\n  font-size: 1.5rem;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n'], ['\n  color: #ddd;\n  position: absolute;\n  font-size: 1.5rem;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n']),
    _templateObject11 = _taggedTemplateLiteral(['\n  padding: 5%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n'], ['\n  padding: 5%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n']),
    _templateObject12 = _taggedTemplateLiteral(['\n  from {\n    transform: scale(0);\n  }\n'], ['\n  from {\n    transform: scale(0);\n  }\n']),
    _templateObject13 = _taggedTemplateLiteral(['\n  background: #fafafa;\n  max-width: 794px;\n  padding: 30px;\n  position: relative;\n  width: 95%;\n  animation: ', ' 0.5s 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  animation-fill-mode: backwards;\n'], ['\n  background: #fafafa;\n  max-width: 794px;\n  padding: 30px;\n  position: relative;\n  width: 95%;\n  animation: ', ' 0.5s 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  animation-fill-mode: backwards;\n']),
    _templateObject14 = _taggedTemplateLiteral(['\n  border-radius: 4px;\n  font-size: 3rem;\n  text-align: center;\n  margin-bottom: 40px;\n'], ['\n  border-radius: 4px;\n  font-size: 3rem;\n  text-align: center;\n  margin-bottom: 40px;\n']),
    _templateObject15 = _taggedTemplateLiteral(['\n  margin-bottom: 30px;\n'], ['\n  margin-bottom: 30px;\n']),
    _templateObject16 = _taggedTemplateLiteral([''], ['']),
    _templateObject17 = _taggedTemplateLiteral(['\n  margin: 0;\n  padding: 0 0 0 20px;\n'], ['\n  margin: 0;\n  padding: 0 0 0 20px;\n']),
    _templateObject18 = _taggedTemplateLiteral(['\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: 50px repeat(2, 1fr);\n  min-width: 40%;\n  padding: 50px 0 50px 40%;\n'], ['\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: 50px repeat(2, 1fr);\n  min-width: 40%;\n  padding: 50px 0 50px 40%;\n']),
    _templateObject19 = _taggedTemplateLiteral(['\n  font-weight: bold;\n'], ['\n  font-weight: bold;\n']),
    _templateObject20 = _taggedTemplateLiteral(['\n  position: fixed;\n  right: 10px;\n  top: 50%;\n  transform: translate(0, -50%);\n  z-index: 2;\n'], ['\n  position: fixed;\n  right: 10px;\n  top: 50%;\n  transform: translate(0, -50%);\n  z-index: 2;\n']),
    _templateObject21 = _taggedTemplateLiteral(['\n  cursor: pointer;\n  border-radius: 100%;\n  border: 0;\n  height: 50px;\n  width: 50px;\n  background: #89c4f4;\n  margin-bottom: 10px;\n  path {\n    fill: #fff;\n  }\n  &:hover {\n    background: #4b77be;\n  }\n'], ['\n  cursor: pointer;\n  border-radius: 100%;\n  border: 0;\n  height: 50px;\n  width: 50px;\n  background: #89c4f4;\n  margin-bottom: 10px;\n  path {\n    fill: #fff;\n  }\n  &:hover {\n    background: #4b77be;\n  }\n']),
    _templateObject22 = _taggedTemplateLiteral(['\n  height: ', 'px;\n  width: ', 'px;\n  path {\n    transform: scaleX(', ') scaleY(', ');\n  }\n'], ['\n  height: ', 'px;\n  width: ', 'px;\n  path {\n    transform: scaleX(', ') scaleY(', ');\n  }\n']);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _React = React,
    Component = _React.Component,
    Fragment = _React.Fragment;
var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;

var keyframes = styled.keyframes;
var styled = styled.default;
var rootNode = document.getElementById('app');

// Utility function for grabbing XY coordinates from event
var getXY = function getXY(evt) {
  var x = evt.pageX,
      y = evt.pageY,
      touches = evt.touches;

  if (touches && touches.length === 1) {
    x = touches[0].pageX;
    y = touches[0].pageY;
  }
  return {
    x: x,
    y: y
  };
};

/**
 * Resizable HOC
 */
var Resizable = styled.div(_templateObject, function (p) {
  return p.translateX;
}, function (p) {
  return p.translateY;
}, function (p) {
  return p.baseStyle;
});
var getDirectionStyles = function getDirectionStyles(d) {
  var bottom = void 0;
  var top = void 0;
  var left = void 0;
  var right = void 0;
  var x = void 0;
  var y = void 0;
  switch (d) {
    case 'n':
      left = '50%';
      x = y = -50;
      top = 0;
      break;
    case 's':
      bottom = 0;
      left = '50%';
      x = -50;
      y = 50;
      break;
    case 'e':
      top = '50%';
      x = 50;
      right = 0;
      y = -50;
      break;
    case 'w':
      top = '50%';
      x = -50;
      left = 0;
      y = -50;
      break;
    case 'se':
      bottom = 0;
      right = 0;
      x = y = 50;
      break;
    case 'sw':
      x = -50;
      y = 50;
      bottom = 0;
      left = 0;
      break;
    case 'ne':
      x = 50;
      y = -50;
      top = 0;
      right = 0;
      break;
    case 'nw':
      x = y = -50;
      top = 0;
      left = 0;
      break;
  }
  return {
    '--x': x,
    '--y': y,
    bottom: bottom,
    top: top,
    left: left,
    right: right
  };
};
var ResizableHandle = styled.div(_templateObject2, function (p) {
  return p.direction;
}, function (p) {
  return getDirectionStyles(p.direction);
});
var makeResizable = function makeResizable(WrappedComponent, opts) {
  var _class, _temp2;

  var defaultOptions = {
    ghosting: true,
    handles: ['n', 's', 'e', 'w', 'se', 'sw', 'ne', 'nw']
  };
  var options = Object.assign({}, defaultOptions, opts);
  return _temp2 = _class = function (_Component) {
    _inherits(_class, _Component);

    function _class() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, _class);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        offsetLeft: 0,
        diffLeft: 0,
        diffTop: 0,
        offsetTop: 0
        // Take into account if there is any drag applied
      }, _this.componentDidMount = function () {
        var _this$__RESIZABLE$get = _this.__RESIZABLE.getBoundingClientRect(),
            height = _this$__RESIZABLE$get.height,
            width = _this$__RESIZABLE$get.width;

        _this.STARTING_TOP = rootNode.offsetHeight / 2 + rootNode.scrollTop;
        _this.setState({
          height: height,
          width: width
        });
      }, _this.endResize = function (e) {
        e.preventDefault();
        var _this2 = _this,
            endResize = _this2.endResize,
            resize = _this2.resize,
            state = _this2.state;
        var offsetTop = state.offsetTop,
            diffTop = state.diffTop,
            diffLeft = state.diffLeft,
            offsetLeft = state.offsetLeft;


        _this.setState({
          diffTop: 0,
          offsetTop: offsetTop + diffTop,
          offsetLeft: offsetLeft + diffLeft,
          diffLeft: 0
        });
        rootNode.removeEventListener('mousemove', resize);
        rootNode.removeEventListener('touchmove', resize);
        rootNode.removeEventListener('mouseup', endResize);
        rootNode.removeEventListener('touchend', endResize);
      }, _this.resize = function (e) {
        e.preventDefault();
        var _this$state = _this.state,
            direction = _this$state.direction,
            startHeight = _this$state.startHeight,
            startX = _this$state.startX,
            startY = _this$state.startY,
            startWidth = _this$state.startWidth;

        var _getXY = getXY(e),
            x = _getXY.x,
            y = _getXY.y;
        // IN HERE, NEED TO ALTER THE TRANSFORM IF APPLICABLE TOO
        // SHOULD WE INSTEAD PASS DOWN THE DRAG ATTRIBUTES?


        if (direction) {
          var height = startHeight;
          var width = startWidth;
          var _this$state2 = _this.state,
              diffLeft = _this$state2.diffLeft,
              diffTop = _this$state2.diffTop;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = direction.split('')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var d = _step.value;

              switch (d) {
                case 'n':
                  // If position absolute, set top to Y
                  diffTop = startY - y;
                  height = startHeight + diffTop;
                  break;
                case 's':
                  height = startHeight + (y - startY);
                  break;
                case 'e':
                  width = startWidth + (x - startX);
                  break;
                case 'w':
                  // If position absolute, set left to X
                  diffLeft = startX - x;
                  width = startWidth + diffLeft;
                  break;
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          _this.setState({
            diffLeft: diffLeft,
            diffTop: diffTop,
            height: height,
            width: width
          });
        }
      }, _this.startResize = function (e, direction) {
        e.preventDefault();
        var _this3 = _this,
            __RESIZABLE = _this3.__RESIZABLE,
            endResize = _this3.endResize,
            resize = _this3.resize;

        var _getXY2 = getXY(e),
            startX = _getXY2.x,
            startY = _getXY2.y;

        var _RESIZABLE$getBoundi = __RESIZABLE.getBoundingClientRect(),
            startHeight = _RESIZABLE$getBoundi.height,
            startWidth = _RESIZABLE$getBoundi.width;

        rootNode.addEventListener('mousemove', resize);
        rootNode.addEventListener('touchmove', resize);
        rootNode.addEventListener('mouseup', endResize);
        rootNode.addEventListener('touchend', endResize);

        _this.setState({
          direction: direction,
          startHeight: startHeight,
          startWidth: startWidth,
          startX: startX,
          startY: startY
        });
      }, _this.render = function () {
        var _this4 = _this,
            props = _this4.props,
            startResize = _this4.startResize,
            state = _this4.state;
        var dragX = props.dragX,
            dragY = props.dragY;
        var diffLeft = state.diffLeft,
            diffTop = state.diffTop,
            height = state.height,
            width = state.width,
            offsetTop = state.offsetTop,
            offsetLeft = state.offsetLeft;

        return React.createElement(
          Resizable,
          {
            className: 'rsizable',
            innerRef: function innerRef(r) {
              return _this.__RESIZABLE = r;
            },
            translateX: dragX - (offsetLeft + diffLeft),
            translateY: dragY - (offsetTop + diffTop),
            baseStyle: Object.assign({}, options.style, {
              top: _this.STARTING_TOP + 'px'
            }) },
          options.handles.length && options.handles.map(function (h, idx) {
            return React.createElement(ResizableHandle, {
              onMouseDown: function onMouseDown(e) {
                return startResize(e, h);
              },
              onTouchStart: function onTouchStart(e) {
                return startResize(e, h);
              },
              className: 'rsizable__handle rsizable__handle--' + h,
              direction: h,
              key: 'resize-handle--' + idx
            });
          }),
          React.createElement(WrappedComponent, _extends({
            resizeHeight: height,
            resizeWidth: width
          }, props))
        );
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return _class;
  }(Component), _class.defaultProps = {
    dragX: 0,
    dragY: 0
  }, _temp2;
};
/**
 * Draggable HOC
 * Applies mousedown and touchstart event listener
 * Passes drag props to component
 */
var makeDraggable = function makeDraggable(WrappedComponent, options) {
  return function (_Component2) {
    _inherits(_class3, _Component2);

    function _class3() {
      var _ref2;

      var _temp3, _this5, _ret2;

      _classCallCheck(this, _class3);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _ret2 = (_temp3 = (_this5 = _possibleConstructorReturn(this, (_ref2 = _class3.__proto__ || Object.getPrototypeOf(_class3)).call.apply(_ref2, [this].concat(args))), _this5), _this5.state = {
        dragX: 0,
        dragY: 0,
        x: undefined,
        y: undefined,
        startX: undefined,
        startY: undefined
      }, _this5.onDragStart = function (e) {
        var _this6 = _this5,
            onDrag = _this6.onDrag,
            onDragEnd = _this6.onDragEnd;

        e.preventDefault();
        rootNode.addEventListener('mousemove', onDrag);
        rootNode.addEventListener('touchmove', onDrag);
        rootNode.addEventListener('mouseup', onDragEnd);
        rootNode.addEventListener('touchend', onDragEnd);

        var _getXY3 = getXY(e),
            startX = _getXY3.x,
            startY = _getXY3.y;

        var bounds = e.target.getBoundingClientRect();
        _this5.setState({
          x: bounds.left,
          y: bounds.top,
          startX: startX,
          startY: startY,
          startDragX: _this5.state.dragX,
          startDragY: _this5.state.dragY
        });
      }, _this5.onDrag = function (e) {
        var _this5$state = _this5.state,
            startDragX = _this5$state.startDragX,
            startDragY = _this5$state.startDragY,
            startX = _this5$state.startX,
            startY = _this5$state.startY;

        var _getXY4 = getXY(e),
            x = _getXY4.x,
            y = _getXY4.y;

        _this5.setState({
          dragX: startDragX + (x - startX),
          dragY: startDragY + (y - startY)
        });
      }, _this5.onDragEnd = function (e) {
        e.preventDefault();
        var _this7 = _this5,
            onDrag = _this7.onDrag,
            onDragEnd = _this7.onDragEnd;

        rootNode.removeEventListener('mousemove', onDrag, { passive: true });
        rootNode.removeEventListener('touchmove', onDrag, { passive: true });
        rootNode.removeEventListener('mouseup', onDragEnd, { passive: true });
        rootNode.removeEventListener('touchend', onDragEnd, { passive: true });
      }, _this5.render = function () {
        var _this5$state2 = _this5.state,
            x = _this5$state2.dragX,
            y = _this5$state2.dragY;

        return React.createElement(WrappedComponent, _extends({
          onDragStart: _this5.onDragStart,
          dragX: x,
          dragY: y
        }, _this5.props));
      }, _temp3), _possibleConstructorReturn(_this5, _ret2);
    }

    return _class3;
  }(Component);
};

var flyIn = keyframes(_templateObject3);
var Container = styled.div(_templateObject4, function (p) {
  return !p.confirmed ? '\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%) scale(1);\n    animation: ' + flyIn + ' .5s .25s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n    animation-fill-mode: backwards;\n  ' : '';
});
var SignatureInput = styled.svg(_templateObject5, function (p) {
  return p.confirmed ? 'transparent' : '#fff';
});
var Action = styled.button(_templateObject6, function (p) {
  return p.confirm ? '\n    height: 50px;\n    width: 50px;\n    border-radius: 100%;\n    border: 0;\n    background: #3fc380;\n\n    &:hover {\n      background: #2eec71;\n    }\n\n  ' : null;
}, function (p) {
  return p.wiper ? '\n          background: none;\n          border: 0;\n          height: 44px;\n          position: absolute;\n          top: 0;\n          right: 0;\n          width: 44px;\n        ' : null;
}, function (p) {
  return p.fill;
}, function (p) {
  return p.hover;
});
var Actions = styled.div(_templateObject7);
var Icon = styled.svg.attrs({
  viewBox: '0 0 24 24',
  preserveAspectRatio: 'xMinYMin'
})(_templateObject8);
var SignatureContainer = styled.div(_templateObject9);
var Placeholder = styled.label(_templateObject10);
var Signature = (_temp5 = _class4 = function (_Component3) {
  _inherits(Signature, _Component3);

  function Signature() {
    var _ref3;

    var _temp4, _this8, _ret3;

    _classCallCheck(this, Signature);

    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return _ret3 = (_temp4 = (_this8 = _possibleConstructorReturn(this, (_ref3 = Signature.__proto__ || Object.getPrototypeOf(Signature)).call.apply(_ref3, [this].concat(args))), _this8), _this8.state = {
      confirmed: _this8.props.confirmed,
      path: _this8.props.path || ''
    }, _this8.startSign = function (e) {
      var _this9 = _this8,
          INPUT = _this9.INPUT,
          endSign = _this9.endSign,
          sign = _this9.sign;

      var _getXY5 = getXY(e),
          x = _getXY5.x,
          y = _getXY5.y;

      var _INPUT$getBoundingCli = INPUT.getBoundingClientRect(),
          left = _INPUT$getBoundingCli.left,
          top = _INPUT$getBoundingCli.top;

      var path = 'M ' + (x - left) + ', ' + (y - top) + ' ';

      rootNode.addEventListener('mousemove', sign);
      rootNode.addEventListener('touchmove', sign);
      rootNode.addEventListener('mouseup', endSign);
      rootNode.addEventListener('touchend', endSign);

      _this8.setState({
        path: _this8.state.path + path
      });
    }, _this8.sign = function (e) {
      var _this10 = _this8,
          INPUT = _this10.INPUT;

      var _getXY6 = getXY(e),
          x = _getXY6.x,
          y = _getXY6.y;

      var _INPUT$getBoundingCli2 = INPUT.getBoundingClientRect(),
          left = _INPUT$getBoundingCli2.left,
          top = _INPUT$getBoundingCli2.top;

      var path = 'L ' + (x - left) + ', ' + (y - top) + ' ';

      _this8.setState({
        path: _this8.state.path + path
      });
    }, _this8.endSign = function (e) {
      var _this11 = _this8,
          endSign = _this11.endSign,
          sign = _this11.sign;

      rootNode.removeEventListener('mousemove', sign);
      rootNode.removeEventListener('touchmove', sign);
      rootNode.removeEventListener('mouseup', endSign);
      rootNode.removeEventListener('touchend', endSign);
    }, _this8.wipe = function () {
      _this8.setState({
        path: ''
      });
    }, _this8.confirm = function () {
      if (confirm('All set?')) {
        TweenMax.to(_this8.CONTAINER, 0.25, {
          delay: 0.25,
          scale: 0,
          onComplete: function onComplete() {
            _this8.setState({
              confirmed: true
            }, function () {
              return _this8.props.onConfirm(_this8.state.path);
            });
          }
        });
      }
    }, _this8.render = function () {
      var _this12 = _this8,
          confirm = _this12.confirm,
          startSign = _this12.startSign,
          wipe = _this12.wipe;
      var _this8$state = _this8.state,
          confirmed = _this8$state.confirmed,
          path = _this8$state.path;


      return React.createElement(
        Container,
        { innerRef: function innerRef(c) {
            return _this8.CONTAINER = c;
          }, confirmed: confirmed },
        React.createElement(
          SignatureContainer,
          null,
          path === '' && React.createElement(
            Placeholder,
            null,
            'Please Sign'
          ),
          React.createElement(
            SignatureInput,
            {
              confirmed: confirmed,
              innerRef: function innerRef(i) {
                return _this8.INPUT = i;
              },
              onMouseDown: startSign,
              onTouchStart: startSign },
            React.createElement('path', {
              stroke: '#111',
              strokeWidth: '2',
              strokeLinecap: 'round',
              fill: 'none',
              d: path
            })
          )
        ),
        !confirmed && React.createElement(
          Actions,
          null,
          React.createElement(
            Action,
            {
              fill: '#fff',
              disabled: path === '',
              confirm: true,
              onClick: confirm },
            React.createElement(
              Icon,
              null,
              React.createElement('path', { d: 'M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z' })
            )
          ),
          React.createElement(
            Action,
            { fill: '#ddd', hover: '#444', wiper: true, onClick: wipe },
            React.createElement(
              Icon,
              null,
              React.createElement('path', { d: 'M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z' })
            )
          )
        )
      );
    }, _temp4), _possibleConstructorReturn(_this8, _ret3);
  }

  return Signature;
}(Component), _class4.defaultProps = {
  confirmed: false
}, _temp5);


var AppContainer = styled.div(_templateObject11);
var scaleIn = keyframes(_templateObject12);
var Document = styled.div(_templateObject13, scaleIn);

var DocumentTitle = styled.h1(_templateObject14);
var DocumentSection = styled.section(_templateObject15);
var DocumentSectionTitle = styled.h3(_templateObject16);
var DocumentSectionContent = styled.ol(_templateObject17);
var DocumentContent = styled.li(_templateObject15);
var Signoff = styled.dl(_templateObject18);
var SignoffDetail = styled.dd(_templateObject19);
var SignoffValue = styled.dt(_templateObject16);
var DocumentActions = styled.div(_templateObject20);
var Sign = styled.button(_templateObject21);
var Stamp = styled.svg.attrs({
  onMouseDown: function onMouseDown(p) {
    return p.onDragStart;
  },
  onTouchStart: function onTouchStart(p) {
    return p.onDragStart;
  }
})(_templateObject22, function (p) {
  return p.resizeHeight;
}, function (p) {
  return p.resizeWidth;
}, function (p) {
  return p.scaleX;
}, function (p) {
  return p.scaleY;
});
var sections = [];
for (var s = 0; s < 2; s++) {
  var points = [];
  var length = Math.floor(Math.random() * 4) + 1;
  for (var p = 0; p < length; p++) {
    points.push(faker.lorem.paragraph());
  }
  sections.push({
    title: s + 1 + '. ' + faker.lorem.sentence(3),
    points: points
  });
}
var content = {
  title: faker.lorem.sentence(3),
  intro: faker.lorem.paragraph(),
  date: new Date().toDateString(),
  sections: sections
};

var Signed = function Signed(props) {
  return React.createElement(
    Stamp,
    {
      onMouseDown: props.onDragStart,
      onTouchStart: props.onDragStart,
      resizeHeight: props.resizeHeight,
      resizeWidth: props.resizeWidth,
      scaleX: props.resizeWidth / 300,
      scaleY: props.resizeHeight / 200 },
    React.createElement('path', {
      stroke: '#111',
      strokeWidth: '2',
      strokeLinecap: 'round',
      fill: 'none',
      d: props.path
    })
  );
};

var DraggableAndResizableSignature = makeDraggable(makeResizable(Signed, {
  style: (_style = {
    cursor: 'move'
  }, _defineProperty(_style, 'cursor', '-webkit-grab'), _defineProperty(_style, 'position', 'absolute'), _defineProperty(_style, 'touchAction', 'none'), _defineProperty(_style, 'left', '50%'), _defineProperty(_style, 'margin', '-100px 0 0 -150px'), _defineProperty(_style, 'zIndex', 3), _style)
}));

var App = function (_Component4) {
  _inherits(App, _Component4);

  function App() {
    var _ref4;

    var _temp6, _this13, _ret4;

    _classCallCheck(this, App);

    for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    return _ret4 = (_temp6 = (_this13 = _possibleConstructorReturn(this, (_ref4 = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref4, [this].concat(args))), _this13), _this13.state = {
      setup: false,
      signature: undefined,
      signatures: 0
    }, _this13.addSignature = function () {
      if (_this13.state.signature) {
        _this13.setState({
          signatures: _this13.state.signatures + 1
        });
      }
    }, _this13.render = function () {
      var _this14 = _this13,
          addSignature = _this14.addSignature;
      var _this13$state = _this13.state,
          signature = _this13$state.signature,
          signatures = _this13$state.signatures,
          setup = _this13$state.setup;

      if (!setup) return React.createElement(Signature, {
        onConfirm: function onConfirm(signature) {
          return _this13.setState({ signature: signature, setup: true });
        },
        confirmed: setup
      });
      return React.createElement(
        AppContainer,
        null,
        new Array(signatures).fill().map(function (s, idx) {
          return React.createElement(DraggableAndResizableSignature, {
            key: 'signature--' + idx,
            path: signature
          });
        }),
        React.createElement(
          DocumentActions,
          null,
          React.createElement(
            Sign,
            { onClick: addSignature },
            React.createElement(
              Icon,
              null,
              React.createElement('path', { d: 'M16.84,2.73C16.45,2.73 16.07,2.88 15.77,3.17L13.65,5.29L18.95,10.6L21.07,8.5C21.67,7.89 21.67,6.94 21.07,6.36L17.9,3.17C17.6,2.88 17.22,2.73 16.84,2.73M12.94,6L4.84,14.11L7.4,14.39L7.58,16.68L9.86,16.85L10.15,19.41L18.25,11.3M4.25,15.04L2.5,21.73L9.2,19.94L8.96,17.78L6.65,17.61L6.47,15.29' })
            )
          ),
          React.createElement(
            Action,
            { fill: '#fff', disabled: false, confirm: true },
            React.createElement(
              Icon,
              null,
              React.createElement('path', { d: 'M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z' })
            )
          )
        ),
        React.createElement(
          Document,
          null,
          React.createElement(
            DocumentTitle,
            null,
            content.title
          ),
          React.createElement(
            DocumentSection,
            null,
            content.intro
          ),
          content.sections.map(function (s, idx) {
            return React.createElement(
              DocumentSection,
              { key: 'document-section--' + idx },
              React.createElement(
                DocumentSectionTitle,
                null,
                s.title
              ),
              React.createElement(
                DocumentSectionContent,
                null,
                s.points.map(function (p, idx) {
                  return React.createElement(
                    DocumentContent,
                    { key: 'document-section--' + idx },
                    p
                  );
                })
              )
            );
          }),
          React.createElement(
            Signoff,
            null,
            React.createElement(
              SignoffDetail,
              null,
              'Signed:'
            ),
            React.createElement(SignoffValue, null),
            React.createElement(
              SignoffDetail,
              null,
              'Name:'
            ),
            React.createElement(SignoffValue, null),
            React.createElement(
              SignoffDetail,
              null,
              'Date:'
            ),
            React.createElement(
              SignoffValue,
              null,
              new Date().toDateString()
            )
          )
        )
      );
    }, _temp6), _possibleConstructorReturn(_this13, _ret4);
  }

  return App;
}(Component);

ReactDOM.render(React.createElement(App, null), rootNode);