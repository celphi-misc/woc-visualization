var astStruct = {
    "node": "block",
    "stmts": {
        "node": "stmts",
        "left": {
            "node": "var_init",
            "id": {
                "node": "id",
                "name": "global_c"
            },
            "init": {
                "node": "int",
                "val": 3
            }
        },
        "right": {
            "node": "stmts",
            "left": {
                "node": "var_init",
                "id": {
                    "node": "id",
                    "name": "global_v"
                },
                "init": {
                    "node": "id",
                    "name": "global_c"
                }
            },
            "right": {
                "node": "stmts",
                "left": {
                    "node": "function",
                    "id": {
                        "node": "id",
                        "name": "foo"
                    },
                    "para_list": {
                        "node": "void"
                    },
                    "block": {
                        "node": "block",
                        "stmts": {
                            "node": "stmts",
                            "left": {
                                "node": "var_init",
                                "id": {
                                    "node": "id",
                                    "name": "bar"
                                },
                                "init": {
                                    "node": "binary",
                                    "left": {
                                        "node": "id",
                                        "name": "global_v"
                                    },
                                    "op": "bleft",
                                    "right": {
                                        "node": "int",
                                        "val": 2
                                    }
                                }
                            },
                            "right": {
                                "node": "stmts",
                                "left": {
                                    "node": "assign",
                                    "left": {
                                        "node": "id",
                                        "name": "global_c"
                                    },
                                    "right": {
                                        "node": "binary",
                                        "left": {
                                            "node": "id",
                                            "name": "global_c"
                                        },
                                        "op": "add",
                                        "right": {
                                            "node": "binary",
                                            "left": {
                                                "node": "id",
                                                "name": "global_v"
                                            },
                                            "op": "mul",
                                            "right": {
                                                "node": "id",
                                                "name": "bar"
                                            }
                                        }
                                    }
                                },
                                "right": {
                                    "node": "return",
                                    "exp": {
                                        "node": "binary",
                                        "left": {
                                            "node": "id",
                                            "name": "bar"
                                        },
                                        "op": "add",
                                        "right": {
                                            "node": "id",
                                            "name": "global_c"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "right": {
                    "node": "function",
                    "id": {
                        "node": "id",
                        "name": "main"
                    },
                    "para_list": {
                        "node": "exps",
                        "left": {
                            "node": "id",
                            "name": "argc"
                        },
                        "right": {
                            "node": "id",
                            "name": "argv"
                        }
                    },
                    "block": {
                        "node": "block",
                        "stmts": {
                            "node": "stmts",
                            "left": {
                                "node": "var_init",
                                "id": {
                                    "node": "id",
                                    "name": "a"
                                },
                                "init": {
                                    "node": "string",
                                    "val": "hello world"
                                }
                            },
                            "right": {
                                "node": "stmts",
                                "left": {
                                    "node": "if",
                                    "test": {
                                        "node": "binary",
                                        "left": {
                                            "node": "id",
                                            "name": "a"
                                        },
                                        "op": "eq",
                                        "right": {
                                            "node": "string",
                                            "val": "hello"
                                        }
                                    },
                                    "if_clause": {
                                        "node": "block",
                                        "stmts": {
                                            "node": "for",
                                            "start": {
                                                "node": "var_init",
                                                "id": {
                                                    "node": "id",
                                                    "name": "i"
                                                },
                                                "init": {
                                                    "node": "int",
                                                    "val": 0
                                                }
                                            },
                                            "test": {
                                                "node": "binary",
                                                "left": {
                                                    "node": "id",
                                                    "name": "i"
                                                },
                                                "op": "le",
                                                "right": {
                                                    "node": "int",
                                                    "val": 10
                                                }
                                            },
                                            "incr": {
                                                "node": "postunary",
                                                "exp": {
                                                    "node": "id",
                                                    "name": "i"
                                                },
                                                "op": "inc"
                                            },
                                            "body": {
                                                "node": "block",
                                                "stmts": {
                                                    "node": "call",
                                                    "head": {
                                                        "node": "id",
                                                        "name": "print"
                                                    },
                                                    "arg_list": {
                                                        "node": "id",
                                                        "name": "a"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "else_clase": {
                                        "node": "if",
                                        "test": {
                                            "node": "binary",
                                            "left": {
                                                "node": "binary",
                                                "left": {
                                                    "node": "id",
                                                    "name": "a"
                                                },
                                                "op": "bracket",
                                                "right": {
                                                    "node": "int",
                                                    "val": 0
                                                }
                                            },
                                            "op": "eq",
                                            "right": {
                                                "node": "string",
                                                "val": "h"
                                            }
                                        },
                                        "if_clause": {
                                            "node": "block",
                                            "stmts": {
                                                "node": "call",
                                                "head": {
                                                    "node": "id",
                                                    "name": "print"
                                                },
                                                "arg_list": {
                                                    "node": "id",
                                                    "name": "a"
                                                }
                                            }
                                        },
                                        "else_clase": {
                                            "node": "block",
                                            "stmts": {
                                                "node": "call",
                                                "head": {
                                                    "node": "id",
                                                    "name": "print"
                                                },
                                                "arg_list": {
                                                    "node": "string",
                                                    "val": "foo"
                                                }
                                            }
                                        }
                                    }
                                },
                                "right": {
                                    "node": "return",
                                    "exp": {
                                        "node": "int",
                                        "val": 0
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};

function getNodeStructure(struct) {
    var result = {};
    result.text = {};
    result.text.name = struct['node'];
    result.children = [];
    for(var prop in struct) {
        if(prop !== 'node') {
            if(typeof struct[prop] === 'object') {
                result.children.push(getNodeStructure(struct[prop]));
            } else {
                result.children.push({HTMLclass:'ast-leaf', text: {name: '' + struct[prop]}, children: []});
            }
        }
    }
    return result;
}

M.AutoInit();

$('#open-fab').click(function(){
    $('#file-input').trigger('click');
});

$('#file-input').change(function() {
    var file = document.getElementById('file-input').files[0];
    if(!file) return;
    var reader = new FileReader();
    reader.onload = function(e) {
        var contents = e.target.result;
        try {
            var json = JSON.parse(contents);
        } catch(e) {
            M.toast({html: 'This is not a valid file!'});
            return;
        }
        astChartConfig.nodeStructure = getNodeStructure(json);
        tree = new Treant(astChartConfig);
    }
    reader.readAsText(file);
});

var astChartConfig = {
    chart: {
        container: "#ast-tree",
        scrollbar: "fancy",
        node: {
            collapsable: true,
            HTMLclass: 'ast-node'
        },
        animation: {
            nodeAnimation: "easeOutBack",
            nodeSpeed: 700,
            connectorsAnimation: "easeOutCubic",
            connectorsSpeed: 500
        }
    },
    nodeStructure: getNodeStructure(astStruct)
}

var tree = new Treant(astChartConfig);