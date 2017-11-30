import React from 'react';
import LazyLoad from 'react-lazy-load'

function Nav({title,links,tabs,children}) {

    const generateTabHeaders = _ => {
	if(tabs) {
	    return (<div className="mdl-layout__tab-bar mdl-js-ripple-effect">
		    {( _ => {
			return tabs.map(({id,label}) => <a href={"#" + id} className="mdl-layout__tab" id={id + "_tab"}>{label}</a>)
		    })()}
		    </div>)
	}

    }
    return (<header className="mdl-layout__header">
	    <div className="mdl-layout-icon"></div>
	    
	    <div className="mdl-layout__header-row">

	    <span className="mdl-layout__title">{title}</span>
	    <div className="mdl-layout-spacer"></div>
	    {children}
	    <nav className="mdl-navigation">
	    {( _ => {
		if(links) {
		    return links.map(({id,label}) => <a className="mdl-navigation__link" href={"#" + id}>{label}</a>);
		}
	    })()}
	    </nav>

	    </div>

	    {generateTabHeaders()}

	    </header>);
}

function Drawer({title,links}) {
    return (<div className="mdl-layout__drawer">
	    <span className="mdl-layout-title">{title}</span>
	    <nav className="mdl-navigation">
	    {( _ => {
		if(links) {
		    return links.map(({href,label}) => <a className="mdl-navigation__link" href={href}>{label}</a>);
		}
	    })()}
				    
	    </nav>
	    </div>);
}

function Body({children}) {
    return ( <main className="mdl-layout__content">
	     {children}
	     </main> )
}

function Menu({menu_id,items,clickhandler}) {
    return (<div>
	    <button id={menu_id} className="mdl-button mdl-js-button mdl-button__icon">
	    <i className="material-icons">more_vert</i>
	    </button>
	    <ul htmlFor={menu_id} className="mdl-menu mdl-js-menu mdl-menu--top-left">
	    {( _ => {
		if(items)
		    return items.map(({ label, id }) => <li onClick={clickhandler} className="mdl-menu__item" data-id={id}>{label}</li>);
	    })()
	    }
	    </ul>
	    </div>)
}

function Card({id,name,number,image,abilities,count,removehandler,addhandler,addhandler2,removehandler2,menuOpts,menuHandler,children,actions,show_title}) {
    let large = true;
    if(typeof screen !== 'undefined') {
	large = screen.width >= 768;
    }

    const parsehandler = function(handler) {
	if(typeof handler === 'object') {
	    return [handler.tooltip,handler.handler]
	}
	return ["",handler]
    }

    const action_button_creator = (button_id, icon, handler_obj, dialog_id) => {
	if(handler_obj) {
	    let [tooltip, handler] = parsehandler(handler_obj)
	    if(dialog_id) {
		let delegate = handler
		handler = evt => {
		    document.querySelector(`#${dialog_id}`).close()
		    delegate(evt)
		}
	    }
	    let activation = [<button id={button_id} className="mdl-button mdl-js-button mdl-button--icon" data-id={id} data-number={number} onClick={handler}>
			      <i className="material-icons">{icon}</i> 
			      </button>,
			      <div className="mdl-tooltip" id={`remove-button-${id}`}>{tooltip}</div>]
			      
	    if(typeof icon === 'object')
		activation = (<button id={button_id} className="mdl-button mdl-js-button" data-id={id} data-number={number} onClick={handler}>
			      {tooltip}
			      </button>)
		
	    return activation
	}

    }
    
    return (<div className="mdl-card" style={{width:"100%",overflow:"unset"}}>
	    <div className="mdl-card__title">
	    </div>
	    <span className="mdl-chip">
	    <span className="mdl-chip__text">{
		(_ => {
		    if(show_title)
			return name
		    return count
		})()
	    }</span>
	    </span>
	    <div className="mdl-card__media">

	    {( _ => {
		if(image && image.trim().length > 0)
		    
		    return (<LazyLoad>
			    <img src={image} style={{width:"100%"}} alt="NO IMAGE"></img>
			    </LazyLoad>)
	    })()}

 	    </div>
	    <div className="mdl-card__supporting-text">
	    {children}
	    </div>
	    <div className="mdl-card__actions">
	    {(_ => {
		if(!large) {
		    
		    return [<button className="mdl-button mdl-js-button mdl-button--icon" onClick={
			evt => {
			    document.querySelector(`#dialog-opts-${id}`).showModal()
			}
		    }>
			    <i className="material-icons">edit</i>
			    </button>,
			    <dialog className="mdl-dialog" id={`dialog-opts-${id}`}>
 			    <div className="mdl-dialog__actions" >
			    {( _ => {
				let opts = []
				opts = opts.concat(action_button_creator(`remove-button-${id}`, {desc: "remove"}, removehandler, `dialog-opts-${id}`))
				opts = opts.concat(action_button_creator(`add-button-${id}`, {desc: 'add'}, addhandler, `dialog-opts-${id}`))
				opts = opts.concat(action_button_creator(`add-button-2-${id}`, {desc: 'add to queue'}, addhandler2, `dialog-opts-${id}`))
				opts = opts.concat(action_button_creator(`remove-handler-2-${id}`, {desc:'remove from queue'}, removehandler2, `dialog-opts-${id}`))
				return opts
			    })()}
			    <button className="mdl-button mdl-js-button mdl-button--icon" onClick={
				evt => {
				    document.querySelector(`#dialog-opts-${id}`).close()
				}
			    }>
			    <i className="material-icons">close</i>
			    </button>
			    </div>
			    </dialog>]
		}
			   
	    })()}
	    {( _ => {
		if(large) {
		    return action_button_creator(`remove-button-${id}`, "remove", removehandler);
		}
	    })()}
	    {( _ => {
		if(large) {
		    return action_button_creator(`add-button-${id}`, 'add', addhandler)
		}
	    })()}
	    {( _ => {
		if(large) {
		    return action_button_creator(`add-button-2-${id}`, 'add to queue', addhandler2)
		}
	    })()
	    }
	    {( _ => {
		if(large) {
		    return action_button_creator(`remove-handler-2-${id}`, 'remove from queue', removehandler2)
		}
	    })()
	    }
	    
	    {( _ => {
		if(menuOpts) {
		    
		    return (<div style={{display:"inline-block"}}>
			    <Menu menu_id={id + "_menu"} items={menuOpts} clickhandler={menuHandler} />
			    </div>)
		}
	    })()}
	    {actions}
	    </div>
	    </div>)

}

function SearchField({value,changehandler}) {
    return (<div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable
                  mdl-textfield--floating-label mdl-textfield--align-right">
	    
            <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="fixed-header-drawer-exp">
            <i className="material-icons">search</i>
            </label>
	    
            <div className="mdl-textfield__expandable-holder">
            <input className="mdl-textfield__input" type="text" name="sample" id="fixed-header-drawer-exp" value={value} onChange={changehandler}></input>
	    
            </div>
	    </div>)
}

export { Nav, Drawer, Body, Menu, Card, SearchField };
