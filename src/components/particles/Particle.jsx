import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const Particle = () => {
	/*const connectParticle = {
		fullScreen: {
			enable: true,
			zIndex: 1,
		},
		detectRetina: true,
		fpsLimit: 120,
		interactivity: {
			events: {
				onClick: {
					enable: true,
					mode: 'push',
				},
				onDiv: {
					elementId: 'repulse-div',
					enable: false,
					mode: 'repulse',
				},
				onHover: {
					enable: true,
					mode: 'connect',
					parallax: {
						enable: false,
						force: 60,
						smooth: 10,
					},
				},
				resize: true,
			},
			modes: {
				bubble: {
					distance: 400,
					duration: 2,
					opacity: 0.8,
					size: 40,
					speed: 2,
				},
				connect: {
					distance: 80,
					lineLinked: {
						opacity: 0.2,
					},
					radius: 60,
				},
				grab: {
					distance: 400,
					lineLinked: {
						opacity: 1,
					},
				},
				push: {
					quantity: 4,
				},
				remove: {
					quantity: 2,
				},
				repulse: {
					distance: 200,
					duration: 0.4,
				},
			},
		},
		particles: {
			color: {
				value: 'random',
			},
			lineLinked: {
				blink: false,
				color: '#ffffff',
				consent: false,
				distance: 150,
				enable: false,
				opacity: 0.2,
				width: 1,
			},
			move: {
				attract: {
					enable: false,
					rotate: {
						x: 600,
						y: 1200,
					},
				},
				bounce: false,
				direction: 'none',
				enable: true,
				outMode: 'out',
				random: false,
				speed: 2,
				straight: false,
			},
			number: {
				density: {
					enable: true,
					area: 600,
				},
				limit: 300,
				value: 300,
			},
			opacity: {
				animation: {
					enable: false,
					minimumValue: 0.1,
					speed: 1,
					sync: false,
				},
				random: false,
				value: 0.5,
			},
			shape: {
				type: 'circle',
			},
			size: {
				animation: {
					enable: false,
					minimumValue: 0.1,
					speed: 40,
					sync: false,
				},
				random: true,
				value: 5,
			},
		},
		polygon: {
			draw: {
				enable: false,
				lineColor: '#ffffff',
				lineWidth: 0.5,
			},
			move: {
				radius: 10,
			},
			scale: 1,
			type: 'none',
			url: '',
		},
		// background: {
		// 	color: '#000000',
		// 	image: '',
		// 	position: '50% 50%',
		// 	repeat: 'no-repeat',
		// 	size: 'cover',
		// },
	};*/
  
  // const defaultParticle = {
  //   fullScreen: {
  //     enable: true,
  //     zIndex: 1,
  //   },
  //   // background: {
  //   // 	color: {
  //   // 		value: '#0d47a1',
  //   // 	},
  //   // },
  //   fpsLimit: 120,
  //   interactivity: {
  //     events: {
  //       onClick: {
  //         enable: true,
  //         mode: 'push',
  //       },
  //       onHover: {
  //         enable: true,
  //         mode: 'repulse',
  //       },
  //       resize: true,
  //     },
  //     modes: {
  //       push: {
  //         quantity: 4,
  //       },
  //       repulse: {
  //         distance: 200,
  //         duration: 0.4,
  //       },
  //     },
  //   },
  //   particles: {
  //     color: {
  //       value: '#fca311',
  //     },
  //     links: {
  //       color: '#e1e1e1',
  //       distance: 120,
  //       enable: true,
  //       opacity: 0.2,
  //       width: 1,
  //     },
  //     collisions: {
  //       enable: true,
  //     },
  //     move: {
  //       direction: 'none',
  //       enable: true,
  //       outModes: {
  //         default: 'bounce',
  //       },
  //       random: false,
  //       speed: 1,
  //       straight: false,
  //     },
  //     number: {
  //       density: {
  //         enable: true,
  //         area: 600,
  //       },
  //       value: 80,
  //     },
  //     opacity: {
  //       value: 0.5,
  //     },
  //     shape: {
  //       type: 'circle',
  //     },
  //     size: {
  //       value: { min: 1, max: 5 },
  //     },
  //   },
  //   detectRetina: true,
  // }

  const fontAwesomeParticle = {
    "fullScreen": {
        "enable": true,
        "zIndex": 1
    },
    "detectRetina": true,
    "fpsLimit": 120,
    "interactivity": {
        "events": {
            "onClick": {
                "enable": true,
                "mode": "push"
            },
            "onDiv": {
                "elementId": "repulse-div",
                "enable": false,
                "mode": "repulse"
            },
            "onHover": {
                "enable": true,
                "mode": "repulse",
                "parallax": {
                    "enable": false,
                    "force": 60,
                    "smooth": 10
                }
            },
            "resize": true
        },
        "modes": {
            "bubble": {
                "distance": 400,
                "duration": 2,
                "opacity": 0.8,
                "size": 40
            },
            "connect": {
                "distance": 80,
                "lineLinked": {
                    "opacity": 0.5
                },
                "radius": 60
            },
            "grab": {
                "distance": 400,
                "lineLinked": {
                    "opacity": 1
                }
            },
            "push": {
                "quantity": 4
            },
            "remove": {
                "quantity": 2
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "slow": {
                "active": false,
                "factor": 1,
                "radius": 0
            }
        }
    },
    "particles": {
        "color": {
            "value": "#e1e1e1"
        },
        "lineLinked": {
            "blink": false,
            "color": "#707070",
            "consent": false,
            "distance": 150,
            "enable": true,
            "opacity": 0.4,
            "shadow": {
                "blur": 5,
                "color": "lime",
                "enable": false
            },
            "width": 1
        },
        "move": {
            "attract": {
                "enable": false,
                "rotate": {
                    "x": 600,
                    "y": 1200
                }
            },
            "collisions": false,
            "direction": "none",
            "enable": true,
            "outMode": "out",
            "random": false,
            "speed": 2,
            "straight": false,
            "trail": {
                "enable": false,
                "length": 10,
                "fillColor": "#000000"
            }
        },
        "number": {
            "density": {
                "enable": true,
                "area": 800
            },
            "limit": 0,
            "value": 80
        },
        "opacity": {
            "animation": {
                "enable": true,
                "minimumValue": 0.1,
                "speed": 1,
                "sync": false
            },
            "random": false,
            "value": 0.5
        },
        "rotate": {
            "animation": {
                "enable": false,
                "speed": 0,
                "sync": false
            },
            "direction": "clockwise",
            "random": false,
            "value": 0
        },
        "shape": {
            "character": [
                {
                    "fill": true,
                    "font": "Font Awesome 5 Brands",
                    "style": "",
                    "value": ["\uf179"],
                    "weight": "400"
                },
                {
                    "fill": true,
                    "font": "Font Awesome 5 Free",
                    "style": "",
                    "value": ["\uf5d1"],
                    "weight": "900"
                }
            ],
            "image": {
                "height": 100,
                "replaceColor": true,
                "src": "https://particles.js.org/images/github.svg",
                "width": 100
            },
            "polygon": {
                "sides": 5
            },
            "stroke": {
                "color": "#ffffff",
                "width": 1
            },
            "type": "char"
        },
        "size": {
            "animation": {
                "enable": false,
                "minimumValue": 10,
                "speed": 10,
                "sync": false
            },
            "random": false,
            "value": 16
        }
    },
    "polygon": {
        "draw": {
            "enable": false,
            "stroke": {
                "color": "#ffffff",
                "width": 0.5
            }
        },
        "enable": false,
        "inline": {
            "arrangement": "one-per-point"
        },
        "move": {
            "radius": 10,
            "type": "path"
        },
        "scale": 1,
        "type": "none",
        "url": ""
    },
    "backgroundMask": {
        "enable": false
    },
    "pauseOnBlur": true,
    // "background": {
    //     "color": "#0d47a1",
    //     "image": "",
    //     "position": "50% 50%",
    //     "repeat": "no-repeat",
    //     "size": "cover"
    // }
}

	const particlesInit = useCallback(async (engine) => {
		console.log(engine);
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async (container) => {
		console.log(container);
	}, []);

	return (
		<Particles
			id="tsparticles"
			init={particlesInit}
			loaded={particlesLoaded}
			options={
        fontAwesomeParticle
      }
		/>
	);
}

export default Particle;
