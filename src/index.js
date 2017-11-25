import React from 'react';

function Nav({title,links,tabs}) {

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

function Card({id,number,image,abilities,count,removehandler,addhandler,addhandler2,removehandler2,menuOpts,menuHandler,children}) {
    return (<div className="mdl-card" style={{width:"100%",overflow:"unset"}}>
	    <div className="mdl-card__title">
	    </div>
	    <span className="mdl-chip">
	    <span className="mdl-chip__text">{count}</span>
	    </span>
	    <div className="mdl-card__media">

	    {( _ => {
		if(image && image.trim().length > 0)
		    return (<img src={image} style={{width:"100%"}} alt="NO IMAGE"></img>)
	    })()}

	    </div>
	    <div className="mdl-card__supporting-text">
	    {children}
	    </div>
	    <div className="mdl-card__actions">
	    {( _ => {
		if(removehandler) {
		    let handler = removehandler;
		    let tooltip = ""
		    if(handler.tooltip && handler.handler) {
			removehandler = handler.handler
			tooltip = handler.tooltip
		    }
		    return [ <button id={`remove-button-${id}`} className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored mdl-button--mini-fab" data-id={id} data-number={number} onClick={removehandler}>
			     <i className="material-icons">remove</i>
			     </button>,
			     <div className="mdl-tooltip" id={`remove-button-${id}`}>{tooltip}</div>]
		}
	    })()}
	    {( _ => {
		if(addhandler) {
		    let handler = addhandler;
		    let tooltip = ""
		    if(handler.tooltip && handler.handler) {
			addhandler = handler.handler;
			tooltip = handler.tooltip
		    }
		    
		    return [<button id={`add-button-${id}`} className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored mdl-button--mini-fab" data-id={id} data-number={number} onClick={addhandler}>
			    <i className="material-icons">add</i>
			    </button>,
			    <div className="mdl-tooltip" htmlFor={`add-button-${id}`}>{tooltip}</div>]
		}
	    })()}
	    {( _ => {
		if(addhandler2) {
		    let handler = addhandler2;
		    let tooltip = ""
		    if(handler.tooltip && handler.handler) {
			addhandler2 = handler.handler;
			tooltip = handler.tooltip
		    }

		    return [<button id={`add-button-2-${id}`} className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored mdl-button--mini-fab" data-id={id} data-number={number} onClick={addhandler2}>
			    <i className="material-icons">add to queue</i>
			    </button>,
			    <div className="mdl-tooltip" htmlFor={`add-button-2-${id}`}>{tooltip}</div>]
		}
	    })()
	    }
	    {( _ => {
		if(removehandler2) {
		    let handler = removehandler2;
		    let tooltip = ""
		    if(handler.tooltip && handler.handler) {
			removehandler2 = handler.handler;
			tooltip = handler.tooltip
		    }
		    
		    return [<button id={`remove-handler-2-${id}`} className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored mdl-button--mini-fab" data-id={id} data-number={number} onClick={removehandler2}>
			    <i className="material-icons">remove frome queue</i>
			    </button>,
			    <div className="mdl-tooltip" htmlFor={`remove-handler-2-${id}`}>{tooltip}</div>]
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
