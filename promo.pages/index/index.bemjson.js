({
    block : 'page',
    title : 'BEM Flexbox grid',
    favicon : 'favicon.ico',
    head : [{ elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1.0' }}],
    styles : [{ elem : 'css', url : 'assets/application.min.css' }],
    scripts : [{ elem : 'js', url : 'assets/application.min.js' }],
    content : [
        {
            elem : 'header',
            content : [
                {
                    block : 'link',
                    url : 'https://github.com/verybigman/bem-grid/tree/master',
                    content : [
                        {
                            tag : 'img',
                            attrs : {
                                src : 'https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67',
                                alt : 'Fork me on GitHub',
                                style : 'position: absolute; top: 0; right: 0; border: 0;',
                                'data-canonical-src' : 'https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png'
                            }
                        }
                    ]
                },
                {
                    block : 'heading', lvl : 1, content : 'Flexbox bem-grid'
                },
                {
                    block : 'paragraph',
                    mods : { lead : true },
                    content : 'This is very simple flexbox grid for your bem-projects. Change browser width to take effect.'
                }
            ]
        },
        {
            elem : 'content',
            content : [
                {
                    tag : 'section',
                    content : [
                        {
                            block : 'heading', lvl : 2, content : 'Awesome for responsive bem-projects'
                        },
                        {
                            block : 'paragraph',
                            content : 'Responsive mods enable specifying different column sizes, offsets and alignment at s, m & l widths'
                        },
                        {
                            block : 'row',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 12, mw : 3, lw : 1 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 6, mw : 7, lw : 10 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 6, mw : 2, lw : 1 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'row',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 12, mw : 2, lw : 1 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 12, mw : 10, lw : 11 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'row',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 10, mw : 8, lw : 10 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 2, mw : 4, lw : 2 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'example',
                            content : [
                                {
                                    block : 'link',
                                    url : 'https://github.com/verybigman/bem-grid/blob/master/desktop.pages/index/index.bemjson.js#L58-L121',
                                    target : '_blank',
                                    content : 'view source'
                                }
                            ]
                        }
                    ]
                },
                {
                    tag : 'section',
                    content : [
                        {
                            block : 'heading', lvl : 2, content : 'Fluid '
                        },
                        {
                            block : 'paragraph',
                            content : 'Percent based widths allow fluid resizing of columns and rows'
                        },
                        {
                            block : 'row',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 1 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 2 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 6 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'row',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 2 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 4 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'row',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 4 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 2 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'example',
                            content : [
                                {
                                    block : 'link',
                                    url : 'https://github.com/verybigman/bem-grid/blob/master/desktop.pages/index/index.bemjson.js#L148-L246',
                                    target : '_blank',
                                    content : 'view source'
                                }
                            ]
                        }
                    ]
                },
                {
                    tag : 'section',
                    content : [
                        {
                            block : 'heading', lvl : 2, content : 'Offsets'
                        },
                        {
                            block : 'paragraph',
                            content : 'Offset a column'
                        },
                        {
                            block : 'row',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 10, so : 2 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'row',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 8, so : 4 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'row',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 6, so : 6 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'row',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 4, so : 8 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'row',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 2, so : 10 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'example',
                            content : [
                                {
                                    block : 'link',
                                    url : 'https://github.com/verybigman/bem-grid/blob/master/desktop.pages/index/index.bemjson.js#L285-L332',
                                    target : '_blank',
                                    content : 'view source'
                                }
                            ]
                        }
                    ]
                },
                {
                    tag : 'section',
                    content : [
                        {
                            block : 'heading', lvl : 2, content : 'Auto size'
                        },
                        {
                            block : 'paragraph',
                            content : 'Any number of auto sizing columns to a row'
                        },
                        {
                            block : 'row',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { s : true },
                                    content : [
                                        { block : 'box' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { s : true },
                                    content : [
                                        { block : 'box' }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'row',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { s : true },
                                    content : [
                                        { block : 'box' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { s : true },
                                    content : [
                                        { block : 'box' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { s : true },
                                    content : [
                                        { block : 'box' }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'example',
                            content : [
                                {
                                    block : 'link',
                                    url : 'https://github.com/verybigman/bem-grid/blob/master/desktop.pages/index/index.bemjson.js#L359-L403',
                                    target : '_blank',
                                    content : 'view source'
                                }
                            ]
                        }
                    ]
                },
                {
                    tag : 'section',
                    content : [
                        {
                            block : 'heading', lvl : 2, content : 'Alignment'
                        },
                        {
                            block : 'paragraph',
                            content : 'Mods to align elements to the left or right of a row as well as the top, bottom, or center of a column'
                        },
                        {
                            block : 'row',
                            mods : { sal : true },
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 2 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 2 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'row',
                            mods : { sac : true },
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 2 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 2 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'row',
                            mods : { sar : true },
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 2 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 2 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'row',
                            mods : { svat : true },
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 6 },
                                    content : [
                                        { block : 'box' },
                                        { block : 'box' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 6 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'row',
                            mods : { svam : true },
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 6 },
                                    content : [
                                        { block : 'box' },
                                        { block : 'box' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 6 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'row',
                            mods : { svab : true },
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 6 },
                                    content : [
                                        { block : 'box' },
                                        { block : 'box' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 6 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'example',
                            content : [
                                {
                                    block : 'link',
                                    url : 'https://github.com/verybigman/bem-grid/blob/master/desktop.pages/index/index.bemjson.js#L430-L552',
                                    target : '_blank',
                                    content : 'view source'
                                }
                            ]
                        }
                    ]
                },
                {
                    tag : 'section',
                    content : [
                        {
                            block : 'heading', lvl : 2, content : 'Ordering'
                        },
                        {
                            block : 'paragraph',
                            content : 'Mods to reorder columns'
                        },
                        {
                            block : 'row',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 4 },
                                    content : [
                                        { block : 'box', content : '1' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 4 },
                                    content : [
                                        { block : 'box', content : '2' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 4, sof : true },
                                    content : [
                                        { block : 'box', content : '3' }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'row',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        { block : 'box', content : '1' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3, sol : true },
                                    content : [
                                        { block : 'box', content : '2' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        { block : 'box', content : '3' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        { block : 'box', content : '4' }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'example',
                            content : [
                                {
                                    block : 'link',
                                    url : 'https://github.com/verybigman/bem-grid/blob/master/desktop.pages/index/index.bemjson.js#L579-L637',
                                    target : '_blank',
                                    content : 'view source'
                                }
                            ]
                        }
                    ]
                },
                {
                    tag : 'section',
                    content : [
                        {
                            block : 'heading', lvl : 2, content : 'Mantle'
                        },
                        {
                            block : 'paragraph',
                            content : 'Block for pretty work with different screens. Resize your browser :-)'
                        },
                        {
                            block : 'row',
                            content : [
                                {
                                    elem : 'col',
                                    mix : [ { block : 'mantle', mods : { hidden : 's', visible : 'm', view : 'block' } } ],
                                    mods : { s : true },
                                    content : [
                                        { block : 'box', content : '1' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mix : [ { block : 'mantle', mods : { hidden : 'm' } } ],
                                    mods : { s : true },
                                    content : [
                                        { block : 'box', content : '2' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mix : [ { block : 'mantle', mods : { hidden : 'l' } } ],
                                    mods : { s : true },
                                    content : [
                                        { block : 'box', content : '3' }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'example',
                            content : [
                                {
                                    block : 'link',
                                    url : 'https://github.com/verybigman/bem-grid/blob/master/desktop.pages/index/index.bemjson.js#L664-L692',
                                    target : '_blank',
                                    content : 'view source'
                                }
                            ]
                        }
                    ]
                },
                {
                    tag : 'section',
                    content : [
                        {
                            block : 'heading', lvl : 2, content : 'Customize'
                        },
                        {
                            block : 'paragraph',
                            content : [
                                'Grid very simple for customize. You can configure everything. Ex: base grid width, columns count, media queries, paddings and more.',
                                'To do this you need create block <strong>variables</strong> on one of levels in your project and override any variable in it.',
                                'So, list of variables you can watch ',
                                {
                                    block : 'link',
                                    url : 'https://github.com/verybigman/bem-grid/blob/master/common.blocks/variables/variables.styl',
                                    target : '_blank',
                                    content : 'here'
                                },
                                '.'
                            ]
                        }
                    ]
                },
                {
                    tag : 'section',
                    content : [
                        {
                            block : 'heading', lvl : 2, content : 'Browsers support'
                        },
                        {
                            block : 'paragraph',
                            content : [
                                'All features work in: IE 10+, FF 25+, Chrome 28+, Safari 7+, Opera 12.1+, iOS 7.1+, Android Browser 4.1+, Chrome for Android 37+. <br>',
                                'For support old browsers i made degradation blocks and in future this grid maybe support IE 8+.'
                            ]
                        }
                    ]
                }
            ]
        },
        {
            elem : 'footer',
            content : [
                {
                    block : 'paragraph',
                    content : [
                        {
                            block : 'link',
                            url : 'http://bem.info',
                            content : [
                                {
                                    block : 'image',
                                    url : 'https://rawgit.com/bem/bem-identity/master/sign/sign.png',
                                    width: '50px'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
})