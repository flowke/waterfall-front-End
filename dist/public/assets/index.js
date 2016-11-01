/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React, ReactDOM) {'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _header = __webpack_require__(4);
	
	var _header2 = _interopRequireDefault(_header);
	
	var _content = __webpack_require__(13);
	
	var _content2 = _interopRequireDefault(_content);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(24);
	__webpack_require__(32);
	
	var Index = function (_React$Component) {
	    _inherits(Index, _React$Component);
	
	    function Index() {
	        _classCallCheck(this, Index);
	
	        return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
	    }
	
	    _createClass(Index, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { id: 'index' },
	                React.createElement(_header2.default, null),
	                React.createElement(_content2.default, null)
	            );
	        }
	    }]);
	
	    return Index;
	}(React.Component);
	
	var root = document.querySelector('#root');
	
	ReactDOM.render(React.createElement(Index, null), root);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(3)))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1);

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = dll;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(34);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _header = __webpack_require__(5);
	
	var _header2 = _interopRequireDefault(_header);
	
	var _sharingPanel = __webpack_require__(7);
	
	var _sharingPanel2 = _interopRequireDefault(_sharingPanel);
	
	var _loginPanel = __webpack_require__(10);
	
	var _loginPanel2 = _interopRequireDefault(_loginPanel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var config = __webpack_require__(9);
	
	// import Register from '../login/register.js';
	
	
	var Header = function (_React$Component) {
	    _inherits(Header, _React$Component);
	
	    function Header(prop) {
	        _classCallCheck(this, Header);
	
	        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, prop));
	
	        _this.state = {
	            username: '',
	            imgUrl: '',
	            userid: ''
	        };
	        return _this;
	    }
	
	    _createClass(Header, [{
	        key: 'handleAddItem',
	        value: function handleAddItem(event) {
	            event.preventDefault();
	            this.refs.panel.handlePanel();
	        }
	    }, {
	        key: 'toggleLogin',
	        value: function toggleLogin(ev) {
	            var $btn = $(ev.target);
	            if ($btn.hasClass('login')) {
	                this.refs.loginPanel.btnClick('login');
	            } else {
	                this.refs.loginPanel.btnClick('register');
	            }
	        }
	    }, {
	        key: 'toggleSharePanel',
	        value: function toggleSharePanel() {
	            this.refs.panel.handleTogglePanel();
	        }
	        /**
	         * 当登陆成功后会被调用
	         */
	
	    }, {
	        key: 'handleLogin',
	        value: function handleLogin(state) {
	            this.setState(state);
	            $(this.refs.userInfo).toggleClass(_header2.default.hide);
	            $(this.refs.loginBtn).toggleClass(_header2.default.hide);
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this2 = this;
	
	            $.ajax({
	                url: config.url + '?p=home&c=user&a=autologin',
	                dataType: 'json',
	                success: function success(data) {
	                    if (data.message === 1) {
	                        _this2.handleLogin({
	                            username: data.user_name,
	                            userid: data.user_id,
	                            imgUrl: data.user_icon
	                        });
	                    }
	                }
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { className: _header2.default.header + ' header' },
	                React.createElement(
	                    'div',
	                    { className: 'wrap' },
	                    React.createElement(
	                        'div',
	                        { className: _header2.default.share_btn + ' ' + _header2.default.btn, onClick: this.toggleSharePanel.bind(this) },
	                        'Sharing'
	                    ),
	                    React.createElement(
	                        'div',
	                        { className: '' + _header2.default.loginPanel, ref: 'loginBtn' },
	                        React.createElement(
	                            'span',
	                            { className: ' ' + _header2.default.btn + ' ' + _header2.default.login + ' login', onClick: this.toggleLogin.bind(this) },
	                            '\u767B\u9646'
	                        ),
	                        React.createElement(
	                            'span',
	                            { className: ' ' + _header2.default.btn + ' ' + _header2.default.login + ' register', onClick: this.toggleLogin.bind(this) },
	                            '\u6CE8\u518C'
	                        )
	                    ),
	                    React.createElement(
	                        'div',
	                        { className: _header2.default.userInfo + ' ' + _header2.default.hide + ' userInfo', ref: 'userInfo' },
	                        React.createElement('img', { src: this.state.imgUrl }),
	                        React.createElement(
	                            'span',
	                            null,
	                            this.state.username
	                        )
	                    ),
	                    React.createElement(_sharingPanel2.default, { ref: 'panel', userid: this.state.userid }),
	                    React.createElement(_loginPanel2.default, { ref: 'loginPanel', handleLogin: this.handleLogin.bind(this) })
	                )
	            );
	        }
	    }]);
	
	    return Header;
	}(React.Component);
	
	exports.default = Header;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 5 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"hide":"_3bUTfXPQw2mGGPbfFL4v5F","userInfo":"_17BJBXtTVLMza2Uh8K_SWe","btn":"_3cbz2cpQxYv-TWGfFgA8hr","share_btn":"_3j3kW0K4sBaWRoKu5jBfQZ","loginPanel":"_1WoAzovZ-xaXef7ZUTQdLA","login":"_7L7thyy4VF3W2oqywbfTT","header":"_3kqxxZ2HSVuDKyOqJ16eVu"};

/***/ },
/* 6 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _panel = __webpack_require__(8);
	
	var _panel2 = _interopRequireDefault(_panel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var config = __webpack_require__(9);
	
	var SharingPanel = function (_React$Component) {
		_inherits(SharingPanel, _React$Component);
	
		function SharingPanel(props) {
			_classCallCheck(this, SharingPanel);
	
			var _this = _possibleConstructorReturn(this, (SharingPanel.__proto__ || Object.getPrototypeOf(SharingPanel)).call(this, props));
	
			_this.handleTogglePanel = _this.handleTogglePanel.bind(_this);
			_this.state = {
				type: '请选择一种类型',
				typeList: null,
				title: '没有标题哦',
				desc: '没有描述',
				img: null,
				category_id: '0'
			};
			return _this;
		}
		/**
	  * 点击分享时候所发起的ajax请求
	  */
	
	
		_createClass(SharingPanel, [{
			key: 'ajaxRequest',
			value: function ajaxRequest(data) {
				console.log(data);
				$.ajax({
					url: config.url + '?p=home&c=share&a=share',
					type: 'POST',
					processData: false,
					contentType: false,
					context: this,
					data: data,
					dataType: 'json',
					success: function success(data) {
						console.log(data);
						if (data.message === '1') {
							return alert('请登陆');
						}
					}
				});
			}
			/**
	   * 点击分享时做的动作,包括调用ajax方法
	   */
	
		}, {
			key: 'submit',
			value: function submit(ev) {
				ev.preventDefault();
				var panelBox = this.refs.panel,
				    form = ev.target;
				$(panelBox).toggleClass(_panel2.default.hide);
	
				var fd = new FormData();
				fd.append('title', form.title.value);
				fd.append('desc', form.desc.value);
				fd.append('category_id', this.state.category_id);
				fd.append('img', this.state.img);
				fd.append('user_id', this.props.userid);
	
				this.ajaxRequest(fd);
			}
			/**
	   * 点击关闭按钮时
	   * 隐藏分享面板的处理函数
	   */
	
		}, {
			key: 'handleTogglePanel',
			value: function handleTogglePanel() {
				$(this.refs.panel).toggleClass(_panel2.default.hide);
			}
			// tile类型的显示和隐藏
	
		}, {
			key: 'typeBoard',
			value: function typeBoard() {
				$(this.refs.typeList).toggle(200);
			}
		}, {
			key: 'listIn',
			value: function listIn(event) {
				$(event.target).addClass(_panel2.default.active);
			}
		}, {
			key: 'listOut',
			value: function listOut(event) {
				$(event.target).removeClass(_panel2.default.active);
			}
			/**
	   * 选择类型后做的动作
	   */
	
		}, {
			key: 'listClick',
			value: function listClick(ev) {
				this.setState({
					type: ev.target.innerText,
					category_id: ev.target.dataset.categoryid
				});
				$(this.refs.typeList).toggleClass(_panel2.default.hide);
				ev.target.className = _panel2.default.active;
			}
			// 上传图片
	
		}, {
			key: 'fileUpload',
			value: function fileUpload(ev) {
				// 阻止文件打开
				ev.stopPropagation();
				ev.preventDefault();
				var fileList = ev.target.files || ev.dataTransfer.files,
				    imgWrap = this.refs.imgWrap,
				    img = this.refs.uploadImg;
	
				var file = fileList[fileList.length - 1];
	
				this.setState({ img: file });
	
				img.src = window.URL.createObjectURL(file);
	
				img.onload = function (ev) {
					window.URL.revokeObjectURL(this.src);
				};
	
				$(img).removeClass(_panel2.default.hide);
				$(this.refs.imgHint).addClass(_panel2.default.hide);
			}
			// 防止打开图片
	
		}, {
			key: 'imgDragover',
			value: function imgDragover(ev) {
				ev.stopPropagation();
				ev.preventDefault();
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				var _this2 = this;
	
				this.refs.imgWrap.addEventListener('drop', this.fileUpload.bind(this), false);
				this.refs.imgWrap.addEventListener('dragover', this.imgDragover.bind(this), false);
				this.refs.imgWrap.onclick = function () {
					_this2.refs.file.click();
				};
	
				//请求分类
				var list = [];
				$.ajax({
					url: config.url + '?h=home&c=category&a=getCategory',
					dataType: 'json',
					success: function success(data) {
						console.log(data);
						data.forEach(function (item, indx) {
							list.push(React.createElement(
								'li',
								{ key: indx, 'data-categoryid': item.category_id, onMouseOut: this.listOut, onMouseOver: this.listIn, onClick: this.listClick.bind(this) },
								item.category_name
							));
						}, _this2);
						_this2.setState({ typeList: list });
					}
				});
			}
		}, {
			key: 'render',
			value: function render() {
				var _this3 = this;
	
				return React.createElement(
					'div',
					{ className: _panel2.default.wrap + ' ' + _panel2.default.hide, ref: 'panel' },
					React.createElement('div', { className: '' + _panel2.default.mask }),
					React.createElement(
						'div',
						{ className: _panel2.default.sharePanel + ' sharePanel' },
						React.createElement(
							'div',
							{ className: '' },
							React.createElement(
								'form',
								{ className: '' + _panel2.default.subForm, onSubmit: this.submit.bind(this) },
								React.createElement('input', { type: 'text', placeholder: 'title', name: 'title', onChange: function onChange(ev) {
										_this3.setState({ title: ev.target.value });
									} }),
								React.createElement('textarea', { rows: '8', placeholder: '\u8BF4\u70B9\u63CF\u8FF0\u5427', name: 'desc', onChange: function onChange(ev) {
										_this3.setState({ desc: ev.target.value });
									} }),
								React.createElement(
									'div',
									{ className: _panel2.default.type + ' type', onClick: this.typeBoard.bind(this) },
									React.createElement(
										'div',
										{ className: 'f-clear' },
										React.createElement(
											'p',
											{ ref: 'typeName' },
											this.state.type
										)
									),
									React.createElement(
										'ul',
										{ className: _panel2.default.hide + ' list', ref: 'typeList' },
										this.state.typeList
									)
								),
								React.createElement(
									'div',
									{ className: '' + _panel2.default.upload },
									'\u4E0A\u4F20\u4F60\u7684\u5C01\u9762',
									React.createElement('input', { className: _panel2.default.fadeHide, ref: 'file', name: true, type: 'file', onChange: this.fileUpload.bind(this) })
								),
								React.createElement(
									'button',
									{ type: 'submit' },
									'\u5206\u4EAB\uFF5E\uFF5E\uFF5E'
								)
							)
						)
					),
					React.createElement(
						'div',
						{ className: _panel2.default.tile + ' tilePreview' },
						React.createElement(
							'div',
							{ className: _panel2.default.imgWrap + ' imgWrap', ref: 'imgWrap', onDrop: this.fileUpload.bind(this) },
							React.createElement(
								'div',
								{ className: '' + _panel2.default.imgHint, ref: 'imgHint' },
								'\u53EF\u4EE5\u628A\u56FE\u7247\u62D6\u62FD\u5230\u8FD9\u91CC\uFF0C\u4E0D\u5927\u4E8E2M'
							),
							React.createElement('img', { src: '', ref: 'uploadImg', className: '' + _panel2.default.hide })
						),
						React.createElement(
							'div',
							{ className: 'post-info' },
							React.createElement(
								'div',
								{ className: 'post-basic-info' },
								React.createElement(
									'h3',
									null,
									React.createElement(
										'a',
										{ href: '#' },
										this.state.title
									)
								),
								React.createElement(
									'span',
									null,
									React.createElement(
										'a',
										{ href: '#' },
										React.createElement(
											'label',
											null,
											' '
										),
										this.state.type
									)
								),
								React.createElement(
									'p',
									null,
									this.state.desc
								)
							),
							React.createElement(
								'div',
								{ className: 'post-info-rate-share' },
								React.createElement(
									'div',
									{ className: 'rateit' },
									React.createElement(
										'span',
										null,
										' '
									)
								),
								React.createElement(
									'div',
									{ className: 'post-share' },
									React.createElement(
										'span',
										null,
										' '
									)
								),
								React.createElement(
									'div',
									{ className: 'clear' },
									' '
								)
							)
						)
					)
				);
			}
		}]);
	
		return SharingPanel;
	}(React.Component);
	
	exports.default = SharingPanel;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 8 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"hide":"_1ChEhSSjXnGL5Ki2RsBU93","fadeHide":"_3tA7ybM098xNuy_TTadeAv","wrap":"_365KjnQVoBAzR39GRYLLMB","mask":"_1PdRnrl9NkavWGzAF---1W","sharePanel":"RgwFxGmJmdonYIGms0-dQ","type":"_14gWpt5qMVTKVTCIVvF6KV","active":"_2DF7UAm31LSYeks2rlXuYi","subForm":"_1wBTlmA2p2Epu8wG5ABYLj","upload":"_2qRtQZ9FagPP74thYgYmnj","tile":"_3Xdi7HE8ti2iaoGkoPswCx","imgWrap":"_2KH32y3jjb6VA74UMAeUIO","imgHint":"_2w94SElf5tjYqDoznEdtkq"};

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = {
		"url": "http://www.waterfall.com"
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _loginPanel = __webpack_require__(11);
	
	var _loginPanel2 = _interopRequireDefault(_loginPanel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var config = __webpack_require__(9);
	
	var LoginPanel = function (_React$Component) {
	    _inherits(LoginPanel, _React$Component);
	
	    function LoginPanel(props) {
	        _classCallCheck(this, LoginPanel);
	
	        var _this = _possibleConstructorReturn(this, (LoginPanel.__proto__ || Object.getPrototypeOf(LoginPanel)).call(this, props));
	
	        _this.state = {
	            action: 'login',
	            submitHint: '登陆'
	        };
	        return _this;
	    }
	
	    /**
	     * 注册与登陆面板的切换逻辑;
	     */
	
	
	    _createClass(LoginPanel, [{
	        key: 'btnClick',
	        value: function btnClick(panel) {
	            var form = this.refs.form;
	            $(this.refs.panel).removeClass(_loginPanel2.default.hide);
	            if (panel === 'login') {
	                this.setState({
	                    action: 'login',
	                    submitHint: '登陆'
	                });
	
	                $(form.cfpassword).addClass(_loginPanel2.default.hide);
	                $(form.submit).val('Login in');
	                $(this.refs.fastGoto).attr('tit', 'signin');
	                $(this.refs.fastGoto).text('去注册');
	            } else {
	                this.setState({
	                    action: 'register',
	                    submitHint: '注册'
	                });
	                $(form.cfpassword).removeClass(_loginPanel2.default.hide);
	                $(form.submit).val('Sign up');
	                $(this.refs.fastGoto).attr('tit', 'login');
	                $(this.refs.fastGoto).text('去登陆');
	            }
	        }
	        /**
	         * 表单提交
	         */
	
	    }, {
	        key: 'submit',
	        value: function submit(ev) {
	            ev.preventDefault();
	            var form = ev.target;
	            if (this.state.action === 'login') {
	                this.ajaxLogin({
	                    username: form.username.value,
	                    password: form.password.value
	                });
	            } else {
	                this.ajaxRegister({
	                    username: form.username.value,
	                    password: form.password.value,
	                    cfpassword: form.cfpassword.value
	                });
	            }
	        }
	    }, {
	        key: 'ajaxRegister',
	        value: function ajaxRegister(data) {
	            var _this2 = this;
	
	            $.ajax({
	                url: config.url + '?p=home&c=user&a=register',
	                type: "POST",
	                data: data,
	                dataType: 'json',
	                success: function success(data) {
	                    console.log(data);
	                    if (data.message === 1) {
	                        $(_this2.refs.form.reset).click();
	                        _this2.registedState(data);
	                    } else if (data.message === 0) {
	                        alert('不对！！！');
	                    }
	                }
	            });
	        }
	        /**
	         * 当注册成功后的状态切换
	         */
	
	    }, {
	        key: 'registedState',
	        value: function registedState(data) {
	            this.btnClick('login');
	            this.setState({
	                user_id: data.id
	            });
	        }
	    }, {
	        key: 'ajaxLogin',
	        value: function ajaxLogin(data) {
	            var _this3 = this;
	
	            $.ajax({
	                url: config.url + '?p=home&c=user&a=login',
	                type: "POST",
	                data: data,
	                dataType: 'json',
	                success: function success(data) {
	                    console.log(data);
	                    if (data.message === 1) {
	                        _this3.closePanel();
	                        _this3.props.handleLogin({
	                            username: data.user_name,
	                            userid: data.user_id,
	                            imgUrl: data.user_icon
	                        });
	                    }
	                }
	            });
	        }
	    }, {
	        key: 'closePanel',
	        value: function closePanel() {
	            $(this.refs.panel).toggleClass(_loginPanel2.default.hide);
	        }
	    }, {
	        key: 'fastGoto',
	        value: function fastGoto(ev) {
	            if ($(ev.target).attr('tit') === 'login') {
	                this.btnClick('login');
	            } else {
	                this.btnClick('signin');
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { className: _loginPanel2.default.panel + ' ' + _loginPanel2.default.hide, ref: 'panel' },
	                React.createElement(
	                    'div',
	                    { className: '' + _loginPanel2.default.johndoe_left },
	                    React.createElement(
	                        'div',
	                        { className: '' + _loginPanel2.default.john_img },
	                        React.createElement('img', { src: __webpack_require__(12), alt: '' }),
	                        React.createElement(
	                            'h2',
	                            null,
	                            'Beckham'
	                        )
	                    ),
	                    React.createElement(
	                        'div',
	                        { className: '' + _loginPanel2.default.john_text },
	                        React.createElement(
	                            'form',
	                            { className: 'form', ref: 'form', action: '#', method: 'post', 'data-action': '{this.state.action}', onSubmit: this.submit.bind(this) },
	                            React.createElement('input', { className: 'email', type: 'text', name: 'username', placeholder: 'Username', required: '' }),
	                            React.createElement('input', { className: 'lock', type: 'password', name: 'password', placeholder: 'Password', required: '' }),
	                            React.createElement('input', { className: '' + _loginPanel2.default.hide, type: 'password', name: 'cfpassword', placeholder: 'confirm Password', required: '' }),
	                            React.createElement('input', { name: 'submit', type: 'submit', value: this.state.submitHint }),
	                            React.createElement('input', { className: _loginPanel2.default.hide, name: 'reset', type: 'reset', value: this.state.submitHint })
	                        ),
	                        React.createElement(
	                            'p',
	                            { className: '' + _loginPanel2.default.fastGoto, ref: 'fastGoto', 'data-tit': 'login', onClick: this.fastGoto.bind(this) },
	                            '\u6CE8\u518C'
	                        )
	                    ),
	                    React.createElement('div', { className: '' + _loginPanel2.default.ico, onClick: this.closePanel.bind(this) })
	                )
	            );
	        }
	    }]);
	
	    return LoginPanel;
	}(React.Component);
	
	exports.default = LoginPanel;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 11 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"center":"VA0oIXAMwgEhwjWY5oFhR","panel":"-b5aufFWmMftugtvVb3u1","hide":"_2V6SEE31fsW32Zbk4jKEbU","ico":"_2oU03Re51PI1MW43B_qNI5","fastGoto":"_2OO3dXYA6X8nNQadUAfYOs","johndoe_left":"Z6Tqtw6fISheehNONXysQ","johndoe_right":"_39-nJQgLMSTbUfiggXbEUR","john_img":"_3Az4iAs63Rt_qbIfNdCNxx","john_text":"_6Iirrmc5pfFiDYOsosxPa","email":"_2PAtH_8Ybxdz09vblbOySp"};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "8a015ab4e1bee877b616da551886c476.png";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _item = __webpack_require__(14);
	
	var _item2 = _interopRequireDefault(_item);
	
	var _content = __webpack_require__(16);
	
	var _content2 = _interopRequireDefault(_content);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var config = __webpack_require__(9);
	
	var imagesLoaded = __webpack_require__(17);
	var wookmark = __webpack_require__(20);
	
	var Content = function (_React$Component) {
	    _inherits(Content, _React$Component);
	
	    function Content(props) {
	        _classCallCheck(this, Content);
	
	        var _this = _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this, props));
	
	        _this.state = {
	            tileList: [],
	            canReq: true
	        };
	        return _this;
	    }
	
	    _createClass(Content, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this2 = this;
	
	            var data = {
	                offset: 0,
	                limit: 20
	            };
	            this.requestTile(data, function (data) {
	                var list = [];
	                data.forEach(function (elt, i) {
	                    list.push(React.createElement(_item2.default, { key: i, data: elt }));
	                });
	                _this2.setState({
	                    tileList: list
	                }, _this2.wookmarkLayout);
	            });
	        }
	        // 请求tile
	
	    }, {
	        key: 'requestTile',
	        value: function requestTile(data, cb) {
	            $.ajax({
	                url: config.url + '?p=home&c=tile&a=getTile',
	                type: 'POST',
	                data: data,
	                dataType: 'json',
	                success: cb
	            });
	        }
	    }, {
	        key: 'handlerScroll',
	        value: function handlerScroll(ev) {
	            var _this3 = this;
	
	            console.log(wookmark);
	            var $elem = $(ev.target);
	            var data = {
	                offset: this.refs.tileWrap.children.length,
	                limit: 10
	            };
	            if (detectScrollBar($elem) && this.state.canReq) {
	                this.state.canReq = false;
	                this.requestTile(data, function (data) {
	                    _this3.state.canReq = true;
	                    if (data.length === 0) {
	                        return;
	                    }
	                    data = data.map(function (elt, i) {
	                        return React.createElement(_item2.default, { key: Math.random().toString().slice(2), data: elt });
	                    });
	                    var list = _this3.state.tileList.concat(data);
	                    _this3.setState({
	                        tileList: list,
	                        canReq: true
	                    }, _this3.wookmarkLayout);
	                });
	            }
	
	            //检测属否需要请求
	            function detectScrollBar($elem) {
	                if ($elem.scrollTop() + $elem.height() > $elem.prop('scrollHeight') - 150) {
	                    return true;
	                } else {
	                    return false;
	                }
	            }
	        }
	    }, {
	        key: 'wookmarkLayout',
	        value: function wookmarkLayout() {
	            var options = {
	                autoResize: true, // This will auto-update the layout when the browser window is resized.
	                align: 'center',
	                // container: $tiles, // Optional, used for some extra CSS styling
	                offset: 20, // Optional, the distance between grid items
	                itemWidth: 260, // Optional, the width of a grid item
	                ignoreInactiveItems: false,
	                onLayoutChanged: false
	            };
	            var $tiles = $(this.refs.tileWrap);
	            imagesLoaded($tiles, function () {
	                // Destroy the old handler
	                if ($tiles.wookmarkInstance) {
	                    $tiles.wookmarkInstance.clear();
	                }
	
	                // Create a new layout handler.
	                // $handler = $('li', $tiles);
	                $tiles.wookmark(options);
	                $tiles.wookmarkInstance.layout(true);
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { className: _content2.default.content + ' content', onScroll: this.handlerScroll.bind(this) },
	                React.createElement(
	                    'div',
	                    { className: 'wrap' },
	                    React.createElement(
	                        'div',
	                        { id: 'main', className: _content2.default.main, role: 'main' },
	                        React.createElement(
	                            'ul',
	                            { id: 'tiles', ref: 'tileWrap', className: _content2.default.tiles },
	                            this.state.tileList
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return Content;
	}(React.Component);
	
	exports.default = Content;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {"use strict";
	
	Object.defineProperty(exports, "__esModule", {
					value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _item = __webpack_require__(15);
	
	var _item2 = _interopRequireDefault(_item);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Item = function (_React$Component) {
					_inherits(Item, _React$Component);
	
					function Item() {
									_classCallCheck(this, Item);
	
									return _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
					}
	
					_createClass(Item, [{
									key: "render",
									value: function render() {
													var props = this.props.data;
													return React.createElement(
																	"li",
																	{ className: _item2.default.item },
																	React.createElement("img", { src: props.tile_cover, width: "200", height: "214" }),
																	React.createElement(
																					"div",
																					{ className: "post-info" },
																					React.createElement(
																									"div",
																									{ className: "post-basic-info" },
																									React.createElement(
																													"h3",
																													null,
																													React.createElement(
																																	"a",
																																	{ href: "#" },
																																	props.tile_title
																													)
																									),
																									React.createElement(
																													"span",
																													null,
																													React.createElement(
																																	"a",
																																	{ href: "#" },
																																	React.createElement(
																																					"label",
																																					null,
																																					" "
																																	),
																																	props.category_name
																													)
																									),
																									React.createElement(
																													"p",
																													null,
																													props.tile_desc
																									)
																					),
																					React.createElement(
																									"div",
																									{ className: "post-info-rate-share" },
																									React.createElement(
																													"div",
																													{ className: "rateit" },
																													React.createElement(
																																	"span",
																																	null,
																																	" "
																													)
																									),
																									React.createElement(
																													"div",
																													{ className: "post-share" },
																													React.createElement(
																																	"span",
																																	null,
																																	" "
																													)
																									),
																									React.createElement(
																													"div",
																													{ className: "clear" },
																													" "
																									)
																					)
																	)
													);
									}
					}]);
	
					return Item;
	}(React.Component);
	
	exports.default = Item;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 15 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"item":"_1WSZfAAiUC4hT2pBy-VyIB","inactive":"_4-NlfR4bdKz8Qp1qg7LPj"};

/***/ },
/* 16 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"content":"_2O77IlH6ExXNrFtfNuKg26","main":"_3H_HCg3SdaOEhlu1nZKiKv","tiles":"_3TPuun2J_qtDPjRYbMkdXp"};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(18);

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * imagesLoaded v4.1.1
	 * JavaScript is all like "You images are done yet or what?"
	 * MIT License
	 */
	
	( function( window, factory ) { 'use strict';
	  // universal module definition
	
	  /*global define: false, module: false, require: false */
	
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(19)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( EvEmitter ) {
	      return factory( window, EvEmitter );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('ev-emitter')
	    );
	  } else {
	    // browser global
	    window.imagesLoaded = factory(
	      window,
	      window.EvEmitter
	    );
	  }
	
	})( window,
	
	// --------------------------  factory -------------------------- //
	
	function factory( window, EvEmitter ) {
	
	'use strict';
	
	var $ = window.jQuery;
	var console = window.console;
	
	// -------------------------- helpers -------------------------- //
	
	// extend objects
	function extend( a, b ) {
	  for ( var prop in b ) {
	    a[ prop ] = b[ prop ];
	  }
	  return a;
	}
	
	// turn element or nodeList into an array
	function makeArray( obj ) {
	  var ary = [];
	  if ( Array.isArray( obj ) ) {
	    // use object if already an array
	    ary = obj;
	  } else if ( typeof obj.length == 'number' ) {
	    // convert nodeList to array
	    for ( var i=0; i < obj.length; i++ ) {
	      ary.push( obj[i] );
	    }
	  } else {
	    // array of single index
	    ary.push( obj );
	  }
	  return ary;
	}
	
	// -------------------------- imagesLoaded -------------------------- //
	
	/**
	 * @param {Array, Element, NodeList, String} elem
	 * @param {Object or Function} options - if function, use as callback
	 * @param {Function} onAlways - callback function
	 */
	function ImagesLoaded( elem, options, onAlways ) {
	  // coerce ImagesLoaded() without new, to be new ImagesLoaded()
	  if ( !( this instanceof ImagesLoaded ) ) {
	    return new ImagesLoaded( elem, options, onAlways );
	  }
	  // use elem as selector string
	  if ( typeof elem == 'string' ) {
	    elem = document.querySelectorAll( elem );
	  }
	
	  this.elements = makeArray( elem );
	  this.options = extend( {}, this.options );
	
	  if ( typeof options == 'function' ) {
	    onAlways = options;
	  } else {
	    extend( this.options, options );
	  }
	
	  if ( onAlways ) {
	    this.on( 'always', onAlways );
	  }
	
	  this.getImages();
	
	  if ( $ ) {
	    // add jQuery Deferred object
	    this.jqDeferred = new $.Deferred();
	  }
	
	  // HACK check async to allow time to bind listeners
	  setTimeout( function() {
	    this.check();
	  }.bind( this ));
	}
	
	ImagesLoaded.prototype = Object.create( EvEmitter.prototype );
	
	ImagesLoaded.prototype.options = {};
	
	ImagesLoaded.prototype.getImages = function() {
	  this.images = [];
	
	  // filter & find items if we have an item selector
	  this.elements.forEach( this.addElementImages, this );
	};
	
	/**
	 * @param {Node} element
	 */
	ImagesLoaded.prototype.addElementImages = function( elem ) {
	  // filter siblings
	  if ( elem.nodeName == 'IMG' ) {
	    this.addImage( elem );
	  }
	  // get background image on element
	  if ( this.options.background === true ) {
	    this.addElementBackgroundImages( elem );
	  }
	
	  // find children
	  // no non-element nodes, #143
	  var nodeType = elem.nodeType;
	  if ( !nodeType || !elementNodeTypes[ nodeType ] ) {
	    return;
	  }
	  var childImgs = elem.querySelectorAll('img');
	  // concat childElems to filterFound array
	  for ( var i=0; i < childImgs.length; i++ ) {
	    var img = childImgs[i];
	    this.addImage( img );
	  }
	
	  // get child background images
	  if ( typeof this.options.background == 'string' ) {
	    var children = elem.querySelectorAll( this.options.background );
	    for ( i=0; i < children.length; i++ ) {
	      var child = children[i];
	      this.addElementBackgroundImages( child );
	    }
	  }
	};
	
	var elementNodeTypes = {
	  1: true,
	  9: true,
	  11: true
	};
	
	ImagesLoaded.prototype.addElementBackgroundImages = function( elem ) {
	  var style = getComputedStyle( elem );
	  if ( !style ) {
	    // Firefox returns null if in a hidden iframe https://bugzil.la/548397
	    return;
	  }
	  // get url inside url("...")
	  var reURL = /url\((['"])?(.*?)\1\)/gi;
	  var matches = reURL.exec( style.backgroundImage );
	  while ( matches !== null ) {
	    var url = matches && matches[2];
	    if ( url ) {
	      this.addBackground( url, elem );
	    }
	    matches = reURL.exec( style.backgroundImage );
	  }
	};
	
	/**
	 * @param {Image} img
	 */
	ImagesLoaded.prototype.addImage = function( img ) {
	  var loadingImage = new LoadingImage( img );
	  this.images.push( loadingImage );
	};
	
	ImagesLoaded.prototype.addBackground = function( url, elem ) {
	  var background = new Background( url, elem );
	  this.images.push( background );
	};
	
	ImagesLoaded.prototype.check = function() {
	  var _this = this;
	  this.progressedCount = 0;
	  this.hasAnyBroken = false;
	  // complete if no images
	  if ( !this.images.length ) {
	    this.complete();
	    return;
	  }
	
	  function onProgress( image, elem, message ) {
	    // HACK - Chrome triggers event before object properties have changed. #83
	    setTimeout( function() {
	      _this.progress( image, elem, message );
	    });
	  }
	
	  this.images.forEach( function( loadingImage ) {
	    loadingImage.once( 'progress', onProgress );
	    loadingImage.check();
	  });
	};
	
	ImagesLoaded.prototype.progress = function( image, elem, message ) {
	  this.progressedCount++;
	  this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
	  // progress event
	  this.emitEvent( 'progress', [ this, image, elem ] );
	  if ( this.jqDeferred && this.jqDeferred.notify ) {
	    this.jqDeferred.notify( this, image );
	  }
	  // check if completed
	  if ( this.progressedCount == this.images.length ) {
	    this.complete();
	  }
	
	  if ( this.options.debug && console ) {
	    console.log( 'progress: ' + message, image, elem );
	  }
	};
	
	ImagesLoaded.prototype.complete = function() {
	  var eventName = this.hasAnyBroken ? 'fail' : 'done';
	  this.isComplete = true;
	  this.emitEvent( eventName, [ this ] );
	  this.emitEvent( 'always', [ this ] );
	  if ( this.jqDeferred ) {
	    var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
	    this.jqDeferred[ jqMethod ]( this );
	  }
	};
	
	// --------------------------  -------------------------- //
	
	function LoadingImage( img ) {
	  this.img = img;
	}
	
	LoadingImage.prototype = Object.create( EvEmitter.prototype );
	
	LoadingImage.prototype.check = function() {
	  // If complete is true and browser supports natural sizes,
	  // try to check for image status manually.
	  var isComplete = this.getIsImageComplete();
	  if ( isComplete ) {
	    // report based on naturalWidth
	    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
	    return;
	  }
	
	  // If none of the checks above matched, simulate loading on detached element.
	  this.proxyImage = new Image();
	  this.proxyImage.addEventListener( 'load', this );
	  this.proxyImage.addEventListener( 'error', this );
	  // bind to image as well for Firefox. #191
	  this.img.addEventListener( 'load', this );
	  this.img.addEventListener( 'error', this );
	  this.proxyImage.src = this.img.src;
	};
	
	LoadingImage.prototype.getIsImageComplete = function() {
	  return this.img.complete && this.img.naturalWidth !== undefined;
	};
	
	LoadingImage.prototype.confirm = function( isLoaded, message ) {
	  this.isLoaded = isLoaded;
	  this.emitEvent( 'progress', [ this, this.img, message ] );
	};
	
	// ----- events ----- //
	
	// trigger specified handler for event type
	LoadingImage.prototype.handleEvent = function( event ) {
	  var method = 'on' + event.type;
	  if ( this[ method ] ) {
	    this[ method ]( event );
	  }
	};
	
	LoadingImage.prototype.onload = function() {
	  this.confirm( true, 'onload' );
	  this.unbindEvents();
	};
	
	LoadingImage.prototype.onerror = function() {
	  this.confirm( false, 'onerror' );
	  this.unbindEvents();
	};
	
	LoadingImage.prototype.unbindEvents = function() {
	  this.proxyImage.removeEventListener( 'load', this );
	  this.proxyImage.removeEventListener( 'error', this );
	  this.img.removeEventListener( 'load', this );
	  this.img.removeEventListener( 'error', this );
	};
	
	// -------------------------- Background -------------------------- //
	
	function Background( url, element ) {
	  this.url = url;
	  this.element = element;
	  this.img = new Image();
	}
	
	// inherit LoadingImage prototype
	Background.prototype = Object.create( LoadingImage.prototype );
	
	Background.prototype.check = function() {
	  this.img.addEventListener( 'load', this );
	  this.img.addEventListener( 'error', this );
	  this.img.src = this.url;
	  // check if image is already complete
	  var isComplete = this.getIsImageComplete();
	  if ( isComplete ) {
	    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
	    this.unbindEvents();
	  }
	};
	
	Background.prototype.unbindEvents = function() {
	  this.img.removeEventListener( 'load', this );
	  this.img.removeEventListener( 'error', this );
	};
	
	Background.prototype.confirm = function( isLoaded, message ) {
	  this.isLoaded = isLoaded;
	  this.emitEvent( 'progress', [ this, this.element, message ] );
	};
	
	// -------------------------- jQuery -------------------------- //
	
	ImagesLoaded.makeJQueryPlugin = function( jQuery ) {
	  jQuery = jQuery || window.jQuery;
	  if ( !jQuery ) {
	    return;
	  }
	  // set local variable
	  $ = jQuery;
	  // $().imagesLoaded()
	  $.fn.imagesLoaded = function( options, callback ) {
	    var instance = new ImagesLoaded( this, options, callback );
	    return instance.jqDeferred.promise( $(this) );
	  };
	};
	// try making plugin
	ImagesLoaded.makeJQueryPlugin();
	
	// --------------------------  -------------------------- //
	
	return ImagesLoaded;
	
	});


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * EvEmitter v1.0.3
	 * Lil' event emitter
	 * MIT License
	 */
	
	/* jshint unused: true, undef: true, strict: true */
	
	( function( global, factory ) {
	  // universal module definition
	  /* jshint strict: false */ /* globals define, module, window */
	  if ( true ) {
	    // AMD - RequireJS
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS - Browserify, Webpack
	    module.exports = factory();
	  } else {
	    // Browser globals
	    global.EvEmitter = factory();
	  }
	
	}( typeof window != 'undefined' ? window : this, function() {
	
	"use strict";
	
	function EvEmitter() {}
	
	var proto = EvEmitter.prototype;
	
	proto.on = function( eventName, listener ) {
	  if ( !eventName || !listener ) {
	    return;
	  }
	  // set events hash
	  var events = this._events = this._events || {};
	  // set listeners array
	  var listeners = events[ eventName ] = events[ eventName ] || [];
	  // only add once
	  if ( listeners.indexOf( listener ) == -1 ) {
	    listeners.push( listener );
	  }
	
	  return this;
	};
	
	proto.once = function( eventName, listener ) {
	  if ( !eventName || !listener ) {
	    return;
	  }
	  // add event
	  this.on( eventName, listener );
	  // set once flag
	  // set onceEvents hash
	  var onceEvents = this._onceEvents = this._onceEvents || {};
	  // set onceListeners object
	  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
	  // set flag
	  onceListeners[ listener ] = true;
	
	  return this;
	};
	
	proto.off = function( eventName, listener ) {
	  var listeners = this._events && this._events[ eventName ];
	  if ( !listeners || !listeners.length ) {
	    return;
	  }
	  var index = listeners.indexOf( listener );
	  if ( index != -1 ) {
	    listeners.splice( index, 1 );
	  }
	
	  return this;
	};
	
	proto.emitEvent = function( eventName, args ) {
	  var listeners = this._events && this._events[ eventName ];
	  if ( !listeners || !listeners.length ) {
	    return;
	  }
	  var i = 0;
	  var listener = listeners[i];
	  args = args || [];
	  // once stuff
	  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];
	
	  while ( listener ) {
	    var isOnce = onceListeners && onceListeners[ listener ];
	    if ( isOnce ) {
	      // remove listener
	      // remove before trigger to prevent recursion
	      this.off( eventName, listener );
	      // unset once flag
	      delete onceListeners[ listener ];
	    }
	    // trigger listener
	    listener.apply( this, args );
	    // get next listener
	    i += isOnce ? 0 : 1;
	    listener = listeners[i];
	  }
	
	  return this;
	};
	
	return EvEmitter;
	
	}));


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(21);

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Wookmark plugin
	  @name wookmark.js
	  @author Christoph Ono (chri@sto.ph or @gbks)
	  @author Sebastian Helzle (me@helzle.it or @sebobo)
	  @version 2.1.2
	  @date 05/05/2016
	  @category jQuery plugin
	  @copyright (c) 2009-2016 Christoph Ono (www.wookmark.com)
	  @license Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
	*/
	/*global define, window, jQuery*/
	/*jslint plusplus: true, bitwise: true */
	(function (factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(22), __webpack_require__(23)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else {
	    factory(window, document);
	  }
	}(function (window, document) {
	
	  // Wookmark default options
	  // ------------------------
	  var defaultOptions = {
	    align: 'center',
	    autoResize: true,
	    comparator: null,
	    direction: undefined,
	    ignoreInactiveItems: true,
	    inactiveClass: 'wookmark-inactive',
	    itemSelector: undefined,
	    itemWidth: 0,
	    fillEmptySpace: false,
	    flexibleWidth: 0,
	    offset: 5,
	    outerOffset: 0,
	    onLayoutChanged: undefined,
	    placeholderClass: 'wookmark-placeholder',
	    possibleFilters: [],
	    resizeDelay: 50,
	    verticalOffset: undefined
	  };
	
	  // Helper functions
	  // ----------------
	
	  // Bind function to set the context for the Wookmark instance function
	  function __bind(fn, me) {
	    return function () {
	      return fn.apply(me, arguments);
	    };
	  }
	
	  // Function for executing css writes to dom on the next animation frame if supported
	  var executeNextFrame = window.requestAnimationFrame || function (callback) { callback(); };
	
	  // Update multiple css values on an object
	  function setCSS(el, properties) {
	    var key;
	    for (key in properties) {
	      if (properties.hasOwnProperty(key)) {
	        el.style[key] = properties[key];
	      }
	    }
	  }
	
	  // Update the css properties of multiple elements at the same time
	  // befor the browsers next animation frame.
	  // The parameter `data` has to be an array containing objects, each
	  // with the element and the desired css properties.
	  function bulkUpdateCSS(data, callback) {
	    executeNextFrame(function () {
	      var i, item;
	      for (i = 0; i < data.length; i++) {
	        item = data[i];
	        setCSS(item.el, item.css);
	      }
	      // Run optional callback
	      if (typeof callback === 'function') {
	        executeNextFrame(callback);
	      }
	    });
	  }
	
	  // Remove whitespace around filter names
	  function cleanFilterName(filterName) {
	    return filterName.replace(/^\s+|\s+$/g, '').toLowerCase();
	  }
	
	  // Remove listener from an element (IE8 compatible)
	  function removeEventListener(el, eventName, handler) {
	    if (window.jQuery) {
	      $(el).off(eventName, handler);
	    } else if (el.removeEventListener) {
	      el.removeEventListener(eventName, handler);
	    } else {
	      el.detachEvent('on' + eventName, handler);
	    }
	  }
	
	  // Add listener to an element (IE8 compatible)
	  function addEventListener(el, eventName, handler) {
	    removeEventListener(el, eventName, handler);
	
	    if (window.jQuery) {
	      $(el).on(eventName, handler);
	    } else if (el.addEventListener) {
	      el.addEventListener(eventName, handler);
	    } else {
	      el.attachEvent('on' + eventName, function () {
	        handler.call(el);
	      });
	    }
	  }
	
	  // Checks if element `el` is not visible in the browser
	  function isHidden(el) {
	    return el.offsetParent === null;
	  }
	
	  // Returns the elements height without margin
	  function getHeight(el) {
	    return el.offsetHeight;
	  }
	
	  // Returns the elements width without margin
	  function getWidth(el) {
	    return el.offsetWidth;
	  }
	
	  // Return true if element has class
	  function hasClass(el, className) {
	    if (el.classList) {
	      return el.classList.contains(className);
	    }
	    return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
	  }
	
	  // Add class to element (IE8+)
	  function addClass(el, className) {
	    if (el.classList) {
	      el.classList.add(className);
	    } else {
	      el.className += ' ' + className;
	    }
	  }
	
	  // Remove class from element (IE8+)
	  function removeClass(el, className) {
	    if (el.classList) {
	      el.classList.remove(className);
	    } else {
	      el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
	    }
	  }
	
	  // Get value of specified data attribute
	  function getData(el, attr, isInt, prefix) {
	    if (prefix === undefined) {
	      prefix = 'wookmark-';
	    }
	    var val = el.getAttribute('data-' + prefix + attr);
	    if (isInt === true) {
	      return parseInt(val, 10);
	    }
	    return val;
	  }
	
	  // Set value of specified data attribute
	  function setData(el, attr, val, prefix) {
	    if (prefix === undefined) {
	      prefix = 'wookmark-';
	    }
	    el.setAttribute('data-' + prefix + attr, val);
	  }
	
	  // Remove duplicates from given array
	  function removeDuplicates(items) {
	    var temp = {}, result = [], x, i = items.length;
	    while (i--) {
	      x = getData(items[i], 'id', true);
	      if (!temp.hasOwnProperty(x)) {
	        temp[x] = 1;
	        result.push(items[i]);
	      }
	    }
	    return result;
	  }
	
	  // Get the computed style from an element (IE 8 compatible)
	  function getStyle(el, prop) {
	    return window.getComputedStyle !== undefined ? window.getComputedStyle(el, null).getPropertyValue(prop) : el.currentStyle[prop];
	  }
	
	
	  // IE 8 compatible indexOf
	  function indexOf(items, item) {
	    var len = items.length, i;
	    for (i = 0; i < len; i++) {
	      if (items[i] === item) {
	        return i;
	      }
	    }
	    return -1;
	  }
	
	  // Main wookmark plugin class
	  // --------------------------
	  function Wookmark(container, options) {
	    options = options || {};
	
	    if (typeof container === 'string') {
	      container = document.querySelector(container);
	    }
	
	    // Instance variables.
	    this.container = container;
	    this.columns = this.resizeTimer = null;
	    this.activeItemCount = 0;
	    this.placeholders = [];
	    this.itemHeightsInitialized = false;
	    this.itemHeightsDirty = false;
	    this.elementTag = 'div';
	
	    // Bind instance methods
	    this.initItems = __bind(this.initItems, this);
	    this.updateOptions = __bind(this.updateOptions, this);
	    this.onResize = __bind(this.onResize, this);
	    this.onRefresh = __bind(this.onRefresh, this);
	    this.getItemWidth = __bind(this.getItemWidth, this);
	    this.layout = __bind(this.layout, this);
	    this.layoutFull = __bind(this.layoutFull, this);
	    this.layoutColumns = __bind(this.layoutColumns, this);
	    this.filter = __bind(this.filter, this);
	    this.clear = __bind(this.clear, this);
	    this.getActiveItems = __bind(this.getActiveItems, this);
	    this.refreshPlaceholders = __bind(this.refreshPlaceholders, this);
	    this.sortElements = __bind(this.sortElements, this);
	    this.updateFilterClasses = __bind(this.updateFilterClasses, this);
	
	    // Initialize children of the container
	    this.initItems();
	
	    // Initial update and layout
	    this.container.style.display = 'block';
	    this.updateOptions(options);
	
	    // Collect filter classes after items have been initialized
	    this.updateFilterClasses();
	
	    // Listen to resize event of the browser if enabled
	    if (this.autoResize) {
	      addEventListener(window, 'resize', this.onResize);
	    }
	
	    // Listen to external refresh event
	    addEventListener(this.container, 'refreshWookmark', this.onRefresh);
	  }
	
	  // Get all valid children of the container object and store them
	  Wookmark.prototype.initItems = function () {
	    // By select all children of the container if no selector is specified
	    if (this.itemSelector === undefined) {
	      var items = [], child, children = this.container.children,
	          i = children.length;
	      while (i--) {
	        child = children[i];
	        // Skip comment nodes on IE8
	        if (child.nodeType !== 8) {
	          // Show item
	          child.style.display = '';
	          setData(child, 'id', i);
	          items.unshift(child);
	        }
	      }
	      this.items = items;
	    } else {
	      this.items = this.container.querySelectorAll(this.itemSelector);
	    }
	
	    if (this.items.length) {
	      this.elementTag = this.items[0].tagName;
	    }
	    this.itemHeightsDirty = true;
	  };
	
	  // Reload all filter classes from all items and cache them
	  Wookmark.prototype.updateFilterClasses = function () {
	    // Collect filter data
	    var i = this.items.length, j, filterClasses = {}, itemFilterClasses,
	      item, filterClass, possibleFilters = this.possibleFilters,
	      k = possibleFilters.length, possibleFilter;
	
	    while (i--) {
	      item = this.items[i];
	
	      // Read filter classes and globally store each filter class as object and the fitting items in the array
	      itemFilterClasses = JSON.parse(getData(item, 'filter-class', false, ''));
	      if (itemFilterClasses && typeof itemFilterClasses === 'object') {
	        j = itemFilterClasses.length;
	        while (j--) {
	          filterClass = cleanFilterName(itemFilterClasses[j]);
	          if (!filterClasses.hasOwnProperty(filterClass)) {
	            filterClasses[filterClass] = [];
	          }
	          filterClasses[filterClass].push(item);
	        }
	      }
	    }
	
	    while (k--) {
	      possibleFilter = cleanFilterName(possibleFilters[k]);
	      if (!filterClasses.hasOwnProperty(possibleFilter)) {
	        filterClasses[possibleFilter] = [];
	      }
	    }
	
	    this.filterClasses = filterClasses;
	  };
	
	  // Method for updating the plugins options
	  Wookmark.prototype.updateOptions = function (options) {
	    var key;
	    this.itemHeightsDirty = true;
	    options = options || {};
	
	    // Overwrite non existing instance variables with the ones from options or the defaults
	    for (key in defaultOptions) {
	      if (defaultOptions.hasOwnProperty(key)) {
	        if (options.hasOwnProperty(key)) {
	          this[key] = options[key];
	        } else if (!this.hasOwnProperty(key)) {
	          this[key] = defaultOptions[key];
	        }
	      }
	    }
	
	    // Vertical offset uses a fallback to offset
	    this.verticalOffset = this.verticalOffset || this.offset;
	
	    // Update layout so changes apply
	    this.layout(true);
	  };
	
	  // This timer ensures that layout is not continuously called as window is being dragged.
	  Wookmark.prototype.onResize = function () {
	    clearTimeout(this.resizeTimer);
	    this.itemHeightsDirty = this.flexibleWidth !== 0;
	    this.resizeTimer = setTimeout(this.layout, this.resizeDelay);
	  };
	
	  // Marks the items heights as dirty and does a relayout
	  Wookmark.prototype.onRefresh = function () {
	    this.itemHeightsDirty = true;
	    this.layout();
	  };
	
	  // Filters the active items with the given string filters.
	  // @param filters array of string
	  // @param mode 'or' or 'and'
	  Wookmark.prototype.filter = function (filters, mode, dryRun) {
	    var activeFilters = [], activeFiltersLength, activeItems = [],
	      i, j, k, filter;
	
	    filters = filters || [];
	    mode = mode || 'or';
	    dryRun = dryRun || false;
	
	    if (filters.length) {
	      // Collect active filters
	      for (i = 0; i < filters.length; i++) {
	        filter = cleanFilterName(filters[i]);
	        if (this.filterClasses.hasOwnProperty(filter)) {
	          activeFilters.push(this.filterClasses[filter]);
	        }
	      }
	
	      // Get items for active filters with the selected mode
	      i = activeFiltersLength = activeFilters.length;
	      if (mode === 'or' || activeFiltersLength === 1) {
	        // Set all items in all active filters active
	        while (i--) {
	          activeItems = activeItems.concat(activeFilters[i]);
	        }
	      } else if (mode === 'and') {
	        var shortestFilter = activeFilters[0], itemValid = true,
	          foundInFilter, currentItem, currentFilter;
	
	        // Find shortest filter class
	        while (i--) {
	          if (activeFilters[i].length < shortestFilter.length) {
	            shortestFilter = activeFilters[i];
	          }
	        }
	
	        // Iterate over shortest filter and find elements in other filter classes
	        shortestFilter = shortestFilter || [];
	        i = shortestFilter.length;
	        while (i--) {
	          currentItem = shortestFilter[i];
	          j = activeFiltersLength;
	          itemValid = true;
	
	          while (j-- && itemValid) {
	            currentFilter = activeFilters[j];
	            if (shortestFilter !== currentFilter) {
	              // Search for current item in each active filter class
	              foundInFilter = false;
	              k = currentFilter.length;
	              while (k-- && !foundInFilter) {
	                foundInFilter = currentFilter[k] === currentItem;
	              }
	              itemValid &= foundInFilter;
	            }
	          }
	
	          if (itemValid) {
	            activeItems = activeItems.concat(shortestFilter[i]);
	          }
	        }
	      }
	
	      // Remove duplicates from active items
	      if (activeFiltersLength > 1) {
	        activeItems = removeDuplicates(activeItems);
	      }
	
	      // Hide inactive items
	      if (!dryRun) {
	        i = this.items.length;
	        while (i--) {
	          if (indexOf(activeItems, this.items[i]) === -1) {
	            addClass(this.items[i], this.inactiveClass);
	          }
	        }
	      }
	    } else {
	      // Show all items if no filter is selected
	      activeItems = this.items;
	    }
	
	    // Show active items
	    if (!dryRun) {
	      i = activeItems.length;
	      while (i--) {
	        removeClass(activeItems[i], this.inactiveClass);
	      }
	      // Unset columns and refresh grid for a full layout
	      this.columns = null;
	      this.layout();
	    }
	    return activeItems;
	  };
	
	  // Creates or updates existing placeholders to create columns of even height
	  Wookmark.prototype.refreshPlaceholders = function (columnWidth, sideOffset) {
	    var i,
	      containerHeight = getHeight(this.container),
	      columnsLength = this.columns.length,
	      column,
	      height,
	      innerOffset,
	      lastColumnItem,
	      placeholdersHtml = '',
	      placeholder,
	      top;
	
	    // Add more placeholders if necessary
	    if (this.placeholders.length < columnsLength) {
	      for (i = 0; i < columnsLength - this.placeholders.length; i++) {
	        placeholdersHtml += '<' + this.elementTag + ' class="' + this.placeholderClass + '"/>';
	      }
	      this.container.insertAdjacentHTML('beforeend', placeholdersHtml);
	      this.placeholders = this.container.querySelectorAll('.' + this.placeholderClass);
	    }
	
	    innerOffset = (this.offset + parseInt(getStyle(this.placeholders[0], 'border-left-width'), 10) * 2) || 0;
	    innerOffset += (parseInt(getStyle(this.placeholders[0], 'padding-left'), 10) * 2)  || 0;
	
	    // Update each placeholder
	    for (i = 0; i < this.placeholders.length; i++) {
	      placeholder = this.placeholders[i];
	      column = this.columns[i];
	
	      if (i >= columnsLength || column.length === 0) {
	        placeholder.style.display = 'none';
	      } else {
	        lastColumnItem = column[column.length - 1];
	        top = getData(lastColumnItem, 'top', true) + getData(lastColumnItem, 'height', true) + this.verticalOffset;
	        height = Math.max(0, containerHeight - top - innerOffset);
	
	        setCSS(placeholder, {
	          position: 'absolute',
	          display: height > 0 ? 'block' : 'none',
	          left: (i * columnWidth + sideOffset) + 'px',
	          top: top + 'px',
	          width: (columnWidth - innerOffset) + 'px',
	          height: height + 'px'
	        });
	      }
	    }
	  };
	
	  // Method the get active items which are not disabled and visible
	  Wookmark.prototype.getActiveItems = function () {
	    var inactiveClass = this.inactiveClass,
	      i,
	      result = [],
	      item,
	      items = this.items;
	
	    if (this.ignoreInactiveItems) {
	      for (i = 0; i < items.length; i++) {
	        item = items[i];
	        if (!hasClass(item, inactiveClass)) {
	          result.push(item);
	        }
	      }
	    } else {
	      return items;
	    }
	    return result;
	  };
	
	  // Method to get the standard item width
	  Wookmark.prototype.getItemWidth = function () {
	    var itemWidth = this.itemWidth,
	      innerWidth = getWidth(this.container) - 2 * this.outerOffset,
	      flexibleWidth = this.flexibleWidth;
	
	    if (typeof itemWidth === 'function') {
	      itemWidth = this.itemWidth();
	    }
	
	    if (this.items.length > 0 && (itemWidth === undefined || (itemWidth === 0 && !this.flexibleWidth))) {
	      itemWidth = getWidth(this.items[0]);
	    } else if (typeof itemWidth === 'string' && itemWidth.indexOf('%') >= 0) {
	      itemWidth = parseFloat(itemWidth) / 100 * innerWidth;
	    }
	
	    // Calculate flexible item width if option is set
	    if (flexibleWidth) {
	      if (typeof flexibleWidth === 'function') {
	        flexibleWidth = flexibleWidth();
	      }
	
	      if (typeof flexibleWidth === 'string' && flexibleWidth.indexOf('%') >= 0) {
	        flexibleWidth = parseFloat(flexibleWidth) / 100 * innerWidth;
	      }
	
	      // Find highest column count
	      var paddedInnerWidth = (innerWidth + this.offset),
	        flexibleColumns = Math.floor(0.5 + paddedInnerWidth / (flexibleWidth + this.offset)),
	        fixedColumns = Math.floor(paddedInnerWidth / (itemWidth + this.offset)),
	        columns = Math.max(flexibleColumns, fixedColumns),
	        columnWidth = Math.min(flexibleWidth, Math.floor((innerWidth - (columns - 1) * this.offset) / columns));
	
	      itemWidth = Math.max(itemWidth, columnWidth);
	    }
	
	    return itemWidth;
	  };
	
	  // Main layout method.
	  Wookmark.prototype.layout = function (force, callback) {
	    // Do nothing if container isn't visible
	    if (!force && isHidden(this.container)) { return; }
	
	    // Calculate basic layout parameters.
	    var calculatedItemWidth = this.getItemWidth(),
	      columnWidth = calculatedItemWidth + this.offset,
	      containerWidth = getWidth(this.container),
	      innerWidth = containerWidth - 2 * this.outerOffset,
	      columns = Math.floor((innerWidth + this.offset) / columnWidth),
	      offset,
	      maxHeight = 0,
	      activeItems = this.getActiveItems(),
	      activeItemsLength = activeItems.length,
	      item;
	
	    // Cache item heights
	    if (force || this.itemHeightsDirty || !this.itemHeightsInitialized) {
	      for (var i = 0; i < activeItemsLength; i++) {
	        item = activeItems[i];
	
	        if (this.flexibleWidth) {
	          // Stretch items to fill calculated width
	          item.style.width = calculatedItemWidth + 'px';
	        }
	        setData(item, 'height', item.offsetHeight);
	      }
	      this.itemHeightsDirty = false;
	      this.itemHeightsInitialized = true;
	    }
	
	    // Use less columns if there are to few items
	    columns = Math.max(1, Math.min(columns, activeItemsLength));
	
	    // Calculate the offset based on the alignment of columns to the parent container
	    offset = this.outerOffset;
	    if (this.align === 'center') {
	      offset += Math.floor(0.5 + (innerWidth - (columns * columnWidth - this.offset)) >> 1);
	    }
	
	    // Get direction for positioning
	    this.direction = this.direction || (this.align === 'right' ? 'right' : 'left');
	
	    // If container and column count hasn't changed, we can only update the columns.
	    if (!force && this.columns !== null && this.columns.length === columns && this.activeItemCount === activeItemsLength) {
	      maxHeight = this.layoutColumns(columnWidth, offset);
	    } else {
	      maxHeight = this.layoutFull(columnWidth, columns, offset);
	    }
	    this.activeItemCount = activeItemsLength;
	
	    // Set container height to height of the grid.
	    this.container.style.height = maxHeight + 'px';
	
	    // Update placeholders
	    if (this.fillEmptySpace) {
	      this.refreshPlaceholders(columnWidth, offset);
	    }
	
	    if (this.onLayoutChanged !== undefined && typeof this.onLayoutChanged === 'function') {
	      this.onLayoutChanged();
	    }
	
	    // Run optional callback
	    if (typeof callback === 'function') {
	      callback();
	    }
	  };
	
	  // Sort elements with configurable comparator
	  Wookmark.prototype.sortElements = function (elements) {
	    return typeof this.comparator === 'function' ? elements.sort(this.comparator) : elements;
	  };
	
	  // Perform a full layout update.
	  Wookmark.prototype.layoutFull = function (columnWidth, columns, offset) {
	    var item, k = 0, i = 0, activeItems, activeItemCount, shortest = null, shortestIndex = null,
	        sideOffset, heights = [], itemBulkCSS = [], leftAligned = this.align === 'left', self = this;
	
	    this.columns = [];
	
	    // Sort elements before layouting
	    activeItems = this.sortElements(this.getActiveItems());
	    activeItemCount = activeItems.length;
	
	    // Prepare arrays to store height of columns and items.
	    while (heights.length < columns) {
	      heights.push(this.outerOffset);
	      this.columns.push([]);
	    }
	
	    // Loop over items.
	    while (i < activeItemCount) {
	      item = activeItems[i];
	
	      // Find the shortest column.
	      shortest = heights[0];
	      shortestIndex = 0;
	      for (k = 0; k < columns; k++) {
	        if (heights[k] < shortest) {
	          shortest = heights[k];
	          shortestIndex = k;
	        }
	      }
	      setData(item, 'top', shortest);
	
	      // stick to left side if alignment is left and this is the first column
	      sideOffset = offset;
	      if (shortestIndex > 0 || !leftAligned) {
	        sideOffset += shortestIndex * columnWidth;
	      }
	
	      // Position the item.
	      itemBulkCSS[i] = {
	        el: item,
	        css: {
	          position: 'absolute',
	          top: shortest + 'px'
	        }
	      };
	      itemBulkCSS[i].css[this.direction] = sideOffset + 'px';
	
	      // Update column height and store item in shortest column
	      heights[shortestIndex] += getData(item, 'height', true) + this.verticalOffset;
	      this.columns[shortestIndex].push(item);
	      i++;
	    }
	
	    // Update all css in the next frame and mark container as initalised
	    bulkUpdateCSS(itemBulkCSS, function () {
	      // Initialisation done
	      if (!hasClass(self.container, 'wookmark-initialised')) {
	        addClass(self.container, 'wookmark-initialised');
	      }
	    });
	
	    // Return longest column
	    return Math.max.apply(Math, heights);
	  };
	
	  // This layout method only updates the vertical position of the
	  // existing column assignments.
	  Wookmark.prototype.layoutColumns = function (columnWidth, offset) {
	    var heights = [], itemBulkCSS = [], k = 0, j = 0,
	      i = this.columns.length, currentHeight,
	      column, item, sideOffset;
	
	    while (i--) {
	      currentHeight = this.outerOffset;
	      heights.push(currentHeight);
	      column = this.columns[i];
	      sideOffset = i * columnWidth + offset;
	
	      for (k = 0; k < column.length; k++, j++) {
	        item = column[k];
	        setData(item, 'top', currentHeight);
	        itemBulkCSS[j] = {
	          el: item,
	          css: {
	            top: currentHeight + 'px'
	          }
	        };
	        itemBulkCSS[j].css[this.direction] = sideOffset + 'px';
	
	        currentHeight += getData(item, 'height', true) + this.verticalOffset;
	      }
	      heights[i] = currentHeight;
	    }
	
	    bulkUpdateCSS(itemBulkCSS);
	
	    // Return longest column
	    return Math.max.apply(Math, heights);
	  };
	
	  // Clear event listeners and time outs and the instance itself
	  Wookmark.prototype.clear = function () {
	    clearTimeout(this.resizeTimer);
	    var i = this.placeholders.length;
	    while (i--) {
	      this.container.removeChild(this.placeholders[i]);
	    }
	    removeEventListener(window, 'resize', this.onResize);
	    removeEventListener(this.container, 'refreshWookmark', this.onRefresh);
	  };
	
	  // Register as jQuery plugin if jQuery is loaded
	  if (window.jQuery !== undefined) {
	    jQuery.fn.wookmark = function (options) {
	      var i = this.length;
	
	      // Use first element if container is an jQuery object
	      if (options !== undefined && options.container instanceof jQuery) {
	        options.container = options.container[0];
	      }
	
	      // Call plugin multiple times if there are multiple elements selected
	      if (i > 1) {
	        while (i--) {
	          $(this).eq(i).wookmark(options);
	        }
	      } else if (i === 1) {
	        // Create a wookmark instance or update an existing one
	        if (!this.wookmarkInstance) {
	          this.wookmarkInstance = new Wookmark(this[0], options || {});
	        } else {
	          this.wookmarkInstance.updateOptions(options || {});
	        }
	      }
	      return this;
	    };
	  }
	
	  window.Wookmark = Wookmark;
	  return Wookmark;
	}));


/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = window;

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = document;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(25);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(31)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, "/* reset */\nhtml,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,dl,dt,dd,ol,nav ul,nav li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}\narticle, aside, details, figcaption, figure,footer, header, hgroup, menu, nav, section {display: block;}\nol,ul{list-style:none;margin:0px;padding:0px;}\nblockquote,q{quotes:none;}\nblockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}\ntable{border-collapse:collapse;border-spacing:0;}\n/* start editing from here */\na{text-decoration:none;}\n.txt-rt{text-align:right;}/* text align right */\n.txt-lt{text-align:left;}/* text align left */\n.txt-center{text-align:center;}/* text align center */\n.float-rt{float:right;}/* float right */\n.float-lt{float:left;}/* float left */\n.clear{clear:both;}/* clear float */\n.pos-relative{position:relative;}/* Position Relative */\n.pos-absolute{position:absolute;}/* Position Absolute */\n.vertical-base{\tvertical-align:baseline;}/* vertical align baseline */\n.vertical-top{\tvertical-align:top;}/* vertical align top */\nnav.vertical ul li{\tdisplay:block;}/* vertical menu */\nnav.horizontal ul li{\tdisplay: inline-block;}/* horizontal menu */\nimg{max-width:100%;}\n/*end reset*/\nbody{\n\tfont-family: 'Open Sans', sans-serif;\n\tbackground:#F0EFEE;\n    -moz-user-select:none;\n}\n/*---start-wrap----*/\n.wrap{\n\twidth:80%;\n\tmargin:0 auto;\n}\n/*---start-header----*/\n\n.logo{\n\tfloat:left;\n}\n.logo img{\n\tdisplay:inline-block;\n}\n.nav-icon{\n\tfloat: left;\n\tmargin: 0.6% 2% 0 8%;\n\twidth: 4.55%;\n}\n.nav-icon a span{\n\twidth:48px;\n\theight:34px;\n\tdisplay:block;\n\tbackground:url(" + __webpack_require__(26) + ") no-repeat 0px 0px;\n}\n\n.box{\n\tposition:absolute;\n\ttop:-100px;\n\twidth:100%;\n\tcolor:#7F7F7F;\n\tmargin:auto;\n\tpadding:0px;\n\tz-index:999999;\n\ttext-align:center;\n\tleft:0px;\n }\n.box_content_center{\n\tbackground: rgba(240, 239, 238, 0.74);\n}\na.boxclose{\n\tcursor: pointer;\n\ttext-align: center;\n\tdisplay: block;\n\tposition: absolute;\n\ttop: 1.9em;\n\tright: 15em;\n }\n #activator {\n}\n.menu_box_list{\n\tdisplay:inline-block;\n\tpadding: 2.1em 0;\n}\n.menu_box_list ul li {\n\tdisplay: inline-block;\n}\n.menu_box_list li a{\n\tdisplay: block;\n\tcolor: #363636;\n\tfont-size: 0.875em;\n\tmargin: 0.44em 2em;\n\tfont-weight: 900;\n\ttext-transform: uppercase;\n\ttext-align: left;\n\t-webkit-transition: all 0.5s ease-in-out;\n\t-moz-transition: all 0.5s ease-in-out;\n\t-o-transition: all 0.5s ease-in-out;\n\ttransition: all 0.5s ease-in-out;\n}\n.menu_box_list li a:hover{\n\tcolor:#B9CB41;\n}\n.menu_box_list li a > i > img{\n\tvertical-align:middle;\n\tpadding-right:10px;\n}\n/*--userinfo--*/\n.userinfo{\n\tfloat: right;\n\twidth: 15%;\n\tmargin-top: 0.3em;\n}\n.user ul li{\n\tdisplay:inline-block;\n}\n.user ul li a span{\n\tvertical-align: middle;\n\tmargin-left: 0.8em;\n\tfont-size: 1em;\n}\n.user ul li a{\n\tcolor:#8C8C8C;\n\ttransition:0.5s all;\n\t-webkit-transition:0.5s all;\n\t-moz-transition:0.5s all;\n\t-o-transition:0.5s all;\n}\n.user ul li a:hover{\n\tcolor:#B9CB41;\n}\n.user ul li a img{\n\tborder-radius:30em;\n\t-webkit-border-radius:30em;\n\t-moz-border-radius:30em;\n\t-o-border-radius:30em;\n\tvertical-align:middle;\n\n}\n/*--//userinfo--*/\n/*----start-post-grids----*/\n.post-share span{\n\tbackground:url(" + __webpack_require__(27) + ") no-repeat 0px 0px;\n\tbackground-size: cover;;\n\theight:26px;\n\twidth:26px;\n\tdisplay:inline-block;\n\tborder-radius:30em;\n\t-webkit-border-radius:30em;\n\t-moz-border-radius:30em;\n\t-o-border-radius:30em;\n}\n.post-share span:hover{\n\topacity: 0.8;\n}\n.rateit span{\n\theight:18px;\n\twidth:76px;\n\tbackground:url(" + __webpack_require__(28) + ") no-repeat 0px 0px;\n\tdisplay:inline-block;\n}\n.rateit span:hover{\n\tbackground:url(" + __webpack_require__(29) + ") no-repeat 0px 0px;\n}\n.post-basic-info{\n\tpadding: 7% 7% 5% 7%;\n}\n.post-basic-info p{\n\tword-break:break-all;\n}\n.post-basic-info h3 a{\n\tword-break:break-all;\n\tcolor: #717171;\n\tfont-size: 1.2em;\n\tmargin-bottom: 0.2em;\n\tdisplay: block;\n\ttransition:0.5s all;\n\t-webkit-transition:0.5s all;\n\t-moz-transition:0.5s all;\n\t-o-transition:0.5s all;\n}\n.post-basic-info h3 a:hover{\n\tcolor:#B9CB41;\n}\n.post-basic-info span a{\n\tcolor:#ACAAAA;\n\tfont-size:0.9em;\n}\n.post-basic-info span a label{\n\theight:12px;\n\twidth:12px;\n\tdisplay:inline-block;\n\tbackground:url(" + __webpack_require__(30) + ") no-repeat 0px 0px;\n\tmargin-right: 0.4em;\n\ttransition:0.5s all;\n\t-webkit-transition:0.5s all;\n\t-moz-transition:0.5s all;\n\t-o-transition:0.5s all;\n}\n.post-basic-info span a:hover{\n\tcolor:#B9CB41;\n}\n.post-basic-info p{\n\tfont-size: 0.875em;\n\tcolor: #B7B5B5;\n\tmargin: 0.6em 0;\n\tline-height: 1.5em;\n}\n\n.post-info-rate-share{\n\tborder-top: 1px solid rgba(183, 181, 181, 0.36);\n\tpadding: 4% 0 2%;\n}\n.rateit{\n\tfloat:left;\n\tmargin: 0.18em 0 0 1em;\n}\n.post-share{\n\tfloat:right;\n\tmargin-right:1.5em;\n}\n/*--footer--*/\n.footer{\n\tposition:fixed;\n\tbottom:10px;\n\tright:15px;\n}\n.footer p{\n\tcolor:#8C8C8C;\n\tfont-size:0.9em;\n}\n.footer p a{\n\tcolor:#B9CB41;\n\ttransition:0.5s all;\n\t-webkit-transition:0.5s all;\n\t-moz-transition:0.5s all;\n\t-o-transition:0.5s all;\n}\n.footer p a:hover{\n\tcolor:#8C8C8C;\n}\n/*----start-single-page----*/\n.artical-content h3 a{\n\tfont: 400 28px/28px 'Open Sans', sans-serif;\n\tcolor: #626262;\n\ttext-align: left;\n\tfont-weight: 400;\n\tpadding: 0.9em 0 0;\n\tdisplay: block;\n}\n.artical-content p{\n\tfont: normal 16px/26px 'Open Sans', sans-serif,Helvetica,sans-serif;\n\tcolor: #9b9b9b;\n\tpadding: 17px 0px;\n\tfont-weight: 400;\n}\n.artical-content img{\n\twidth:100%;\n}\n/*----share-artical----*/\n.share-artical ul li{\n\tdisplay:inline-block;\n\tpadding-right:10px;\n}\n.share-artical ul li img{\n\tvertical-align: text-top;\n\tpadding-right:7px;\n}\n.share-artical ul li a{\n\tfont: 400 14px/22px  'Open Sans', sans-serif;\n\tcolor: #cbcbc3;\n\tpadding-left: 20px;\n\tfont-weight: 400;\n}\n.share-artical ul li a:hover{\n\tcolor:#B9CB41;\n}\n/*---comment-box----*/\n.single-page {\n\tmargin-top: 8em;\n\tbackground: #fff;\n\tpadding:2%;\n}\n/*----artical-links---*/\n.artical-links{\n\tpadding: 10px 0px;\n\tfloat: left;\n}\n.share-artical {\n\tfloat: right;\n\tpadding: 10px;\n}\n.artical-links ul li{\n\tdisplay:inline-block;\n}\n.artical-links ul li img{\n\tvertical-align:middle;\n\tpadding-right:10px;\n}\n.artical-links ul li a{\n\tfont: 400 14px/22px  'Open Sans', sans-serif;\n\tcolor: #cbcbc3;\n\tpadding-left: 20px;\n\tfont-weight: 400;\n}\n.artical-links ul li a:hover{\n\tcolor:#B9CB41;\n}\n/*----start-comment-section---*/\nh4.style1 a {\n\tfont: 400 20px/28px 'Open Sans', sans-serif;\n\tcolor: #363636;\n\ttext-transform: uppercase;\n\tpadding: 1em 0;\n\t-webkit-transition: all 0.3s ease-out;\n\t-moz-transition: all 0.3s ease-out;\n\t-ms-transition: all 0.3s ease-out;\n\t-o-transition: all 0.3s ease-out;\n\ttransition: all 0.3s ease-out;\n}\nh3.style {\n\tfont: 400 13px/28px 'Open Sans', sans-serif;\n\tcolor: #363636;\n\ttext-align: left;\n\ttext-transform: uppercase;\n\tpadding: 0.8em 0 0;\n}\np.para {\n\tfont-size:0.875em;\n\tcolor: #B7B5B5;\n\tmargin: 0.6em 0;\n\tline-height: 1.8em;\n\tfont-weight: 400;\n}\n.grids_of_2 h2 {\n\tfont:400 30px/28px 'Open Sans', sans-serif;\n\tcolor: #363636;\n\ttext-align: left;\n\tpadding: 1em 0 0.5em;\n}\n.grid1_of_2{\n\tmargin-top: 0.8em;\n}\n.grid_img{\n\tfloat: left;\n\twidth: 8.33333%;\n\tmargin-right: 2%;\n}\n.grid_text{\n\tfloat: left;\n\twidth:88.33333%\n}\n.grid_text h3{\n\ttext-align:left;\n}\n.btn1{\n\tdisplay: inline-block;\n\ttext-align: left;\n\tfont-size: 0.875em;\n\tcolor:#363636;\n\tline-height: 1.8em;\n\tpadding: 2px 0;\n\tfont-family: 'Open Sans', sans-serif;\n\ttransition:0.5s all;\n\t-webkit-transition:0.5s all;\n\t-moz-transition:0.5s all;\n\t-o-transition:0.5s all;\n\tfont-weight: 400;\n}\n.btn1:hover{\n\tzoom: 1;\n\tcolor:#B9CB41;\n}\n.grid1_of_2.left{\n\tmargin-left: 14%;\n}\n/*---comment-box----*/\n.artical-commentbox {\n\tmargin: 1em 0;\n}\n.table-form{\n\tmargin: 0em auto;\n}\n.table-form form input[type=\"text\"]{\n\tfont-family: 'Open Sans', sans-serif;\n\tborder: 1px solid rgba(192, 192, 192, 0.61);\n\toutline: none;\n\tpadding: 12px;\n\tcolor: #333333;\n\toverflow: hidden;\n\twidth: 30%;\n\tdisplay: block;\n\tborder-radius: 4px;\n\t-webkit-border-radius: 4px;\n\t-moz-border-radius: 4px;\n\t-o-border-radius: 4px;\n\ttransition: border-color 0.3s;\n\t-o-transition: border-color 0.3s;\n\t-ms-transition: border-color 0.3s;\n\t-moz-transition: border-color 0.3s;\n\t-webkit-transition: border-color 0.3s;\n\t-webkit-appearance: none;\n\tbox-shadow: 0px 0px 1px rgba(0, 0, 0, 0.05);\n\t-webkit-box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.05);\n\t-moz-box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.05);\n\t-o-box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.05);\n}\n.table-form textarea{\n\tfont-family: 'Open Sans', sans-serif;\n\tpadding: 8px;\n\toutline:none;\n\tcolor: #333333;\n\tborder: 1px solid rgba(192, 192, 192, 0.61);\n\twidth:60%;\n\theight:180px;\n\tresize: none;\n\tborder-radius: 4px;\n\t-webkit-border-radius: 4px;\n\t-moz-border-radius: 4px;\n\t-o-border-radius: 4px;\n\ttransition: border-color 0.3s;\n\t-o-transition: border-color 0.3s;\n\t-ms-transition: border-color 0.3s;\n\t-moz-transition: border-color 0.3s;\n\t-webkit-transition: border-color 0.3s;\n\t-webkit-appearance: none;\n\tbox-shadow: 0px 0px 1px rgba(0, 0, 0, 0.05);\n\t-webkit-box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.05);\n\t-moz-box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.05);\n\t-o-box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.05);\n}\n.table-form form input[type=\"text\"]:hover,.table-form textarea:hover{\n\tborder: 1px solid #B9CB41;\n}\n.table-form input[type=\"submit\"]{\n\tfont-family: 'Open Sans', sans-serif;\n\tcolor: #5a5a5a;\n\tpadding: 0.8em 1.5em;\n\tbackground: #fff;\n\ttext-decoration: none;\n\ttext-shadow: none;\n\tborder: 1px solid rgba(192, 192, 192, 0.61);\n\tdisplay: block;\n\t-webkit-transition: all 0.3s ease-out;\n\t-moz-transition: all 0.3s ease-out;\n\t-ms-transition: all 0.3s ease-out;\n\t-o-transition: all 0.3s ease-out;\n\ttransition: all 0.3s ease-out;\n\tborder-radius: 4px;\n\t-webkit-border-radius: 4px;\n\t-moz-border-radius: 4px;\n\t-o-border-radius: 4px;\n\tcursor:pointer;\n\tfont-size: 1em;\n\toutline:none;\n}\n.table-form input[type=\"submit\"]:hover{\n\tcolor:#B9CB41;\n\tborder: 1px solid #B9CB41;\n}\n.table-form label{\n\tdisplay: block;\n\tmargin: 0.4em 0 0.5em;\n\tfont-family: 'Open Sans', sans-serif;\n\tcolor:#363636;\n\tfont-weight:100;\n}\n.table-form div{\n\tmargin:0.5em 0;\n}\n.table-form div {\n\tmargin: 1em 0;\n}\n/*----//End-comment-section---*/\n/*  Contact Form  */\n.contact-info {\n\tmargin-top: 8em;\n\tpadding: 2% 2% 3% 2%;\n\tbackground: #fff;\n}\n.contact form{\n\tfont-family: 'Open Sans', sans-serif;\n}\n.map{\n\tmargin-bottom:30px;\n}\n.list3 li>img {\n\tfloat: left;\n\tmargin-right:10px;\n}\n.extra-wrap {\n\toverflow: hidden;\n}\n.extra-wrap p {\n\tcolor: #626262;\n\tline-height: 1.8em;\n\tfont-size: 0.85em;\n\tmargin-bottom: 5px;\n\tfont-family: 'Open Sans', sans-serif;\n}\nspan.mail a {\n\tcolor:#B9CB41;\n}\nspan.mail a:hover{\n\tcolor:#626262;\n}\n.contact-to input[type=\"text\"] {\n\tpadding: 12px 10px;\n\twidth: 30.66%;\n\tfont-family: 'Open Sans', sans-serif;\n\tmargin: 12px 0;\n\tborder: 1px solid rgba(192, 192, 192, 0.61);\n\tcolor: #626262;\n\tbackground: #FFF;\n\tfloat: left;\n\toutline: none;\n\tfont-size: 0.85em;\n\ttransition: border-color 0.3s;\n\t-o-transition: border-color 0.3s;\n\t-ms-transition: border-color 0.3s;\n\t-moz-transition: border-color 0.3s;\n\t-webkit-transition: border-color 0.3s;\n\tbox-shadow: 0px 0px 1px rgba(0, 0, 0, 0.05);\n\t-webkit-box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.05);\n\t-moz-box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.05);\n\t-o-box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.05);\n\tborder-radius: 4px;\n\t-webkit-border-radius: 4px;\n\t-moz-border-radius: 4px;\n\t-o-border-radius: 4px;\n}\n.contact-to input[type=\"text\"]:nth-child(2),.contact-to input[type=\"text\"]:nth-child(3){\n\tmargin-left:10px;\n}\n.text2 input[type=\"text\"], .text2 textarea {\n\twidth: 97.7%;\n\tmargin: 12px 0;\n\tborder: 1px solid rgba(192, 192, 192, 0.61);\n\tcolor: #626262;\n\tfont-family: 'Open Sans', sans-serif;\n\toutline: none;\n\tmargin-bottom: 25px;\n\theight: 100px;\n\tpadding: 12px 10px;\n\tfont-size: 0.85em;\n\ttransition: border-color 0.3s;\n\t-o-transition: border-color 0.3s;\n\t-ms-transition: border-color 0.3s;\n\t-moz-transition: border-color 0.3s;\n\t-webkit-transition: border-color 0.3s;\n\tbox-shadow: 0px 0px 1px rgba(0, 0, 0, 0.05);\n\t-webkit-box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.05);\n\t-moz-box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.05);\n\t-o-box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.05);\n\tborder-radius: 4px;\n\t-webkit-border-radius: 4px;\n\t-moz-border-radius: 4px;\n\t-o-border-radius: 4px;\n}\n.text2 textarea{\n\theight:180px;\n}\n.text2 input[type=\"text\"]:hover,.text2 textarea:hover,.contact-to input[type=\"text\"]:hover{\n\tborder: 1px solid #B9CB41;\n}\n.contact-form input[type=\"submit\"] {\n\tfont-family: 'Open Sans', sans-serif;\n\tcolor: #5a5a5a;\n\tpadding: 0.8em 1.5em;\n\tbackground: #fff;\n\ttext-decoration: none;\n\ttext-shadow: none;\n\tborder: 1px solid rgba(192, 192, 192, 0.61);\n\tdisplay: block;\n\t-webkit-transition: all 0.3s ease-out;\n\t-moz-transition: all 0.3s ease-out;\n\t-ms-transition: all 0.3s ease-out;\n\t-o-transition: all 0.3s ease-out;\n\ttransition: all 0.3s ease-out;\n\tborder-radius: 4px;\n\t-webkit-border-radius: 4px;\n\t-moz-border-radius: 4px;\n\t-o-border-radius: 4px;\n\tcursor: pointer;\n\tfont-size: 1em;\n\toutline: none;\n}\n.contact-form input[type=\"submit\"]:hover{\n\tcolor: #B9CB41;\n\tborder: 1px solid #B9CB41;\n}\n.span_1_of_first1 h5{\n\tcolor: #363636;\n\ttext-transform: uppercase;\n\tfont-size: 1.2em;\n\ttransition: 0.5s all;\n\t-webkit-transition: 0.5s all;\n\t-moz-transition: 0.5s all;\n\t-o-transition: 0.5s all;\n\tfont-family: 'Open Sans', sans-serif;\n\tmargin-bottom: 0.6em;\n}\n.span_1_of_first1 {\n\twidth: 29.5%;\n}\n.col_1_of_bottom:first-child {\n\tmargin-left: 0;\n}\n.col_1_of_bottom {\n\tdisplay: block;\n\tfloat: left;\n\tmargin: 1% 0 1% 3.6%;\n}\n.contact-grids {\n\tmargin-bottom: 1em;\n}\n/*----//End-contact----*/\n/*---//End-wrap----*/\n", ""]);
	
	// exports


/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAiCAYAAAAZHFoXAAAACXBIWXMAAC4jAAAuIwF4pT92AAAABGdBTUEAALGOfPtRkwAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAACEElEQVR42mL8//8/w4sXL6QZGBgygTgBiEHswQyeAvECIJ4uISHxFCCAGJ8/fy7HyMj4kJubm4GTk5OBmZl5ULv+79+/DN+/f2f4+vUrAzDw5QECiAUU8jw8PAwgDwwFAApgkHuBgc7w+fPnTIAAYgKKJYNCfqgBqJuTAQIIFAOiIN+A8sJQAiA3g9wOEEBMDEMcAATQkPcAQAANeQ8ABBAoDwy59I8MAAKIhRTF169fZwDWGzR1kLS0NIO6ujrR6gECiKQkRGvHg6vZp09JUg8QQEywJEQMFhcXp7kHJCUliXYPCAAEEKgp8V9UVHRIpv/Xr18zAATQkC+FAAJoyJdCAAE05GMAIIBIioGbN2+C+g40dZCUlBSDqqoq0eoBAoikGKC140Hg2bNnJKkHCCCSPCAmJkZzDwB7WSSpBwggcDEqJCQ0JNP/u3fvGAACaMhnYoAAGvLFKEAADfkYAAggklqjt27dYnj58iXN20IqKipEqwcIIJIac7R2PKzFS0pjDiCASEpC9Gj0kdriBQggcDEqICAwJNP/hw8fGAACaMiXQgABNORLIYAAGvIeAAggkAdeD8UkBHXza4AAAnlg7s+fP4kuugYL/vXrF8gDCwACCDy8DmQ85ODgYGBlZYWNOQ7qkP/9+zfDjx8/QFwlgABihE5wgKo+0ARHFKhFO8hTD6hTsowBMsFxByDAAPNeih4X+XqwAAAAAElFTkSuQmCC"

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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XzY0IDIwMTYtMDktMTcgaHR0cDovL3d3dy5pbWFnZW1hZ2ljay5vcmfd2aVOAAAAY3RFWHRzdmc6Y29tbWVudAAgR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICDOSJALAAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBhZ2VzADGn/7svAAAAGHRFWHRUaHVtYjo6SW1hZ2U6OkhlaWdodAA2ODS1avOkAAAAF3RFWHRUaHVtYjo6SW1hZ2U6OldpZHRoADY4NCabo/kAAAAZdEVYdFRodW1iOjpNaW1ldHlwZQBpbWFnZS9wbmc/slZOAAAAF3RFWHRUaHVtYjo6TVRpbWUAMTQ3MzkzMjI2OfFwbL4AAAASdEVYdFRodW1iOjpTaXplADQ4LjFLQtFR4u0AAABfdEVYdFRodW1iOjpVUkkAZmlsZTovLy9ob21lL3d3d3Jvb3Qvc2l0ZS93d3cuZWFzeWljb24ubmV0L2Nkbi1pbWcuZWFzeWljb24uY24vc3JjLzEyMDQzLzEyMDQzNzAucG5nBNb72gAAAABJRU5ErkJggg=="

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAASCAYAAADxEzisAAAACXBIWXMAAC4jAAAuIwF4pT92AAAABGdBTUEAALGOfPtRkwAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAErUlEQVR42mL8//8/Ay6w64wTM5BiB+Lvbib7cCskEgDNEwJSn4Fm/WagArh37x4rkGJVUlL6RgWzGIEUJxD/BJr3F5c6gABiImCOCBCHQAONGiAFiNUZqAdUgdiTSmaB/BgMxGL4FAEEEBMRDmoHYl4qOSoPiF2oGGAgs+qoZBYPEHcAsRo+RQABRCjAQLEnBcTOVMiOAUBKGojdgGwWKmQhkBnuQKwHZBtRIcCcoH71wKcIIICY8HiQFZodQSCMSg4CATsgVqCCeXJAbA9l+1HBPJgfQ4ARwIZLEUAA4UthNkCsDGVbAANQkYLUJQ6kvKFcbiqVO55Qs0DAFehJbgpSKyjwLaFcJWikYgUAAYQvwGKAmBnKlgRifwo85wx1CNxsaAqmJDvGIAmZIHmYHOAHzY6wMInBpRAggBh3nnZcBqRNQU0HtIBUQasdPwHxQzQ1IIdvATYTSqApqRdI+QDxLyBGbobIArEAEh8kdxtUhSOJcQHxYyCeDDRvHTRggoBUDjT7ITcd2KCFMyOS2CsgfonEB7ntDxDPAzYTJkDN64IGDkj8H1r25kfi/4K67x+a+04DBBDI0Bogngj1KD7AB8S6aGJTgLgVid8MxKA2TCkBsxix1EYXgbgKiE8gia0H4mdAPB2IDQiYKYbWJAC19cqAeBqSWBuo3QbEBQTMAkWINprYNiCuBQggRlDDFZo9CqAeJqbNBYrJPGBKWIWjzAqGBqYEkVkCFCBVQPM+4MiC/NCIySbSvEtAnAVMWUdxmBcKpCYgZUN8AJQL6oG4D2jeb4AAYkRu6QM96gxNbdp4DDgIyiZAz10hUNCrQwMNX7sLlHpqgGbNJ7LsioOmEmkcSkCpewUQFwE994qAWZrQ1OeAR9k1IC4EmrULJgAQQIzoXSOgR/2hWYERiwFvgdgW6MHrRNaOoIbvYSAWx6GkHmhWE4kFfjWQasEhDcrWdkAPfiLSLA2o+0SwSIMCJgRo1jpkQYAAwlZLGuAILFg5pkmC/0AFvSgeeQMG0oEhHjlZKCYWqEP9hKucxXAfQAAxYWms2qOpeY3ExiaPD7ii2fEdWhjDgBXQTlESUpcwSA9awf4eiS9EYvPCAVrAY/MrWB69EQsQQOgpTBMpVN9DKwItaAH5B9Z/A3pSgEgHRSKxz0IDG1Tg3oOKiSL1AIgBjkjZ+z4QhwMxqFu0Dq1NRUzg80EjlAHqt0nQsjsPWvQwQFsFWsj6AAKICUuICwLxEVBLGli+TATiN0BcCPXoHagBekSUX+pQtaCyoB/kOKA5p4F4I7Qhuwpqvw8JAeYN1bMaZAawfFkPxA+gAQfy6GdQXxAYGMTUzjrQAAJFXjjQnHwgfg3Ek6G9iMPQIgWlUgAIICYkD7JBUwColnQDeuwkskIgfwNU83oiYxE0lPMIpBaotwiI3yOZ9QCIQZ7MB2JFoN2yRKQIGWhjGlRrhQHxfZgckP0H6lEnaDuOGPeBKjdQ5DmgF+xA/mmQM0FNCVAlArQb3tQCCCAGUC0JwsAWPwcQW8D4uDBQDTOR6tyAWJUIdfpALEZI3d27d0WB2IAIdYJAbESEOgsgZiFCnTkQc8L4AAEGAMAdBVEJzSgcAAAAAElFTkSuQmCC"

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAASCAYAAADxEzisAAAACXBIWXMAAC4jAAAuIwF4pT92AAAABGdBTUEAALGOfPtRkwAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAFm0lEQVR42mL8//8/Ay6w64wTM5BiB+Lvbib7cCskEgDNEwJSn4Fm/WagAjh0IUVcgMPth55G2EdKzbp37x4jkOIE4p9KSkp/cakDCCAmAuaIAHEINNCoAVKAWJ1KZjH8+/+j7N//70lUMg7kx2AgFsOnCCCACAWYKhC3AzEvlRyVB8Qu1AqwP//eJf/597GESsbxAHEHEKvhUwQQQIQCzBOIpYDYmQrZMQBISQOxG5DNQql5u896BANTGP+PP3elbt+9ZEqFAHOC+tUDnyKAAGLC40FWaHYEgTAqOQgE7IBYgVLDmBg5/UD0jz+3GH79fRpLBffB/BgCLM/YcCkCCCB8KcwGiJWhbAtgACpSkLrEgZQ3lMsNTbmUpFbx//9/eUHKsZ8M33/f9gF6kpuCAl8OSFlCuUrQSMUKAAIIX4DFADEzlC0JxP4U+NEZ6hC42dAUTBZgZGR1Axb2IjD+198XFP7+/2pLgfv8oNkRFiYxuBQCBBDjztOOy4A0qAz4jhaQKmi14ycgfoimBlQWbQE2E0qgMd8LpHyA+BcQIzdDZIFYAIkPkrsNqsKRxLiA+DEQTwaatw4kcPBC0qa//z45MzGysfxn+P8PphAoxgYMMKTIZmRgZRL5y8DIBG+u/P//m4mFSeA3J6vmKlPt4iRoSuqCBs4fUOJEshuUwviR+L+g7vuH5r7TAAEE8nANEE+EehQf4ANiXTSxKUDcisRvBvkHiEsJJRIstdFFIK4C4hMwgd9/X8azMPFP/vX3RTR+4/4z/P73mhkpRzCwMcv852O3mc7JolGOpLANiEEpu4CA+0BlmDaa2DYgrgUIIEZQwxWaPQqgHiamzfUS1EQApoRVOMqYYGhgShCZJaaDAgto3gdskvvOBccCa8QZwFTFRYxhvOyWb/nZHaK11Fx34iizQoHUBKRsiA+AckE9EPcBG7S/AQKIEbmlD/SoMzS1aeMx4CAQ5wA9d4VAwawODTR87a5noBQONGs+EQW9OguT0Fpg2wun24BZkIGP3eGEEKePP9BzrwgU9JpAahoQO+BRdg2IC4Fm7YIJAAQQI3rXCOgwUOG+Hppt0MFbILYFevA6kbUZqOF7GIjFcSipB5rVRELtqMrEyH4OWDPyYJMX4HB/IcIVqg704Ccia0cNqPtEsOZzYBMDaNY6ZEGAAMJWSxrgCCxYOaZJQu0DKuhF8cgbkFibCfz7/wtn8+H33xdC0AqGWKAO9ROuchbDfQABxISlsWqPpuY1EhubPD7gimYHqCZG7nhbAe0UJdYwZkYeYOr/z4hoXrABfQUv5xl+/L3P9vPvYzcS3OcALeCx+RUsj96IBQgg9BSmiRSq76EVgRa0gPwDFXcBelKASAdFIrHPQgMbVODeg4qJIvUACIL/DP9ikWrBn8Kc/mXsLPJpzEz8XyHNjc8MP37fiiYyO/JBI5QB6rdJ0LI7D1r0MEBbBVrI+gACiAlLiAsC8RFQaxxYvkwE4jdAXAj16B2oAXrEFNJQtaCyoB/kOKA5p4F4I7Qhuwpqvw+R5Zc6sJaUBeUUHjazW4KcnhZGWpnddgZzZgObS/rAADwPsurHn/uGwMAgpnbWgQYQKPLCgWVVPhC/BuLJ0J7IYWiRglIpAAQQE5KD2KApAFRLugE9dhJZIZC/Aap5PbTxR8xQziOQWqDeIiB+j2TWAyAOBzLzgVgRaDfBcoeZibeQhYnvpxCn/xwrvQ51fY3IC/BuhNHGuw6Gi4w4WJR6gf3KL9//3Ionwn2gyg0UeQ7oBTuQfxrkTFBTAtRNAkYAvKkFEEBMaIHXDfRIARB/x2YDUPwpNKWtIWZAARrwW3ApAMqBskE2WosfR/nFv5ef3TncRDsvFZcaYGorYWRk9wFmzbNEuG89tBZ8jE0SKP4DiIuBzE7kcAIIMABIm7U2IRuo1wAAAABJRU5ErkJggg=="

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAACXBIWXMAAC4jAAAuIwF4pT92AAAABGdBTUEAALGOfPtRkwAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAA/ElEQVR42mL8//8/Awhs3bqVGUjlA3EUEBsA8QUgXgbEE729vf8yQAFAADGCNEAV7wViewZMcBCInWGaAAKICSpYAVUMEuwD4iAo/RcqXgHTDRBALFA6GUr3AU0qg7LXA20GaSiFyreCBAECCGaDBJTeh+YcGF8aJgAQQDANl6G0E5oGGP8aTAAggGBOmgXEZkBcBA2AfVDF+VD5KTANAAEEs2EBEN8EYpDiIiDeAqVB/DtQeTAACCCwBmiQJUJDBRmA+HHI8QAQQDAbQJqOw0ICCbRCxeEAIIAYYTENA0A/gJzjDWICFfugxyJAADFhidloIN4EpTEAQIABAIp7QWSaxvtSAAAAAElFTkSuQmCC"

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(33);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(31)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./main.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./main.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, "/* css reset */\nbody,p,h1,h2,h3,h4,h5,h6,dl,dd,form,select{margin:0;}\nol,ul{list-style:none; padding:0; margin:0;}\na{text-decoration:none; color:black;}\nimg{border:none; vertical-align:top;}\nem,i,{font-style:normal;}\nstrong{font-weight:normal;}\ntable{border-collapse:collapse;}\nth,td{padding:0;}\ninput{margin:0; padding:0;}\ntextarea{margin:0; padding:0; resize:none; overflow:auto; outline:none;}\n\n.f-clear:after{content:\"\";display:block;clear:both;}\n.f-clear{*zoom:1}\n\n.f-inlineBlock{ display: inline-block; *zoom:1; *display: inline; }\n\nfooter {\n  text-align: center;\n\n}\n\nfooter a {\n  color: #435DC5;\n  text-decoration: none;\n}\n\n/**\n * Progress bar for imagesLoaded\n */\n.progress-bar {\n  background-color: #0BC20B;\n  height: 2px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: 0;\n  box-shadow: 0 1px 3px rgba(11, 194, 11, 0.2);\n  -webkit-transition: width 0.3s ease-out;\n     -moz-transition: width 0.3s ease-out;\n       -o-transition: width 0.3s ease-out;\n          transition: width 0.3s ease-out;\n}\n\n/**\n * Placerholder css\n */\n.wookmark-placeholder {\n          border-radius: 2px;\n     -moz-border-radius: 2px;\n  -webkit-border-radius: 2px;\n  background-color: #eee;\n  border: 1px solid #dedede;\n  z-index: -1;\n}\n\n.example-tiles {\n  position: relative; /** Needed to ensure items are laid out relative to this container **/\n  margin: 0;\n  padding: 0;\n}\n\n.example-tiles li {\n  display: block;\n  list-style-type: none;\n  float: left;\n  margin: 5px;\n  -webkit-transition: all 0.3s ease-out;\n     -moz-transition: all 0.3s ease-out;\n       -o-transition: all 0.3s ease-out;\n          transition: all 0.3s ease-out;\n}\n\n.example-tiles a,\n.example-tiles a:hover {\n  color: #555;\n  background-color: #eee;\n  text-align: center;\n  display: table-cell;\n  vertical-align: middle;\n  width: 200px;\n  height: 200px;\n  font-size: 2em;\n  font-weight: bold;\n  text-decoration: none;\n  border: 1px solid #ddd;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n  padding: 5px 8px;\n  border-radius: 3px;\n}\n\n.example-tiles a:hover {\n  background-color: #ddd;\n}\n/*--media Quries for 640px-monitors-*/\n@media only screen and (max-width:640px) and (min-width:480px) {\n\t#main {\n\t\tmargin-top: 7em;\n\t}\n}\n/*--media Quries for 480px-monitors-*/\n@media only screen and (max-width:480px) and (min-width:320px) {\n\t#main {\n\t\tmargin-top: 9.5em;\n\t}\n}\n/*--media Quries for 320px-monitors-*/\n@media only screen and (max-width:320px) and (min-width:240px) {\n\t#main {\n\t\tmargin-top: 9em;\n\t}\n\t#tiles li {\n\t\twidth: 266px;\n\t}\n}\n", ""]);
	
	// exports


/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map