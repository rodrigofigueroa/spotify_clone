window.addEventListener( 'load', () => {
    navClick()
    profileMenu()
})

function navClick(){
    let nav = Array.from( document.querySelector( 'nav' )
        .getElementsByTagName( 'li' ) )
        clickRemove( nav )
}

const navAction =  ( item, items ) => {
    items.forEach( it => it.classList.remove( 'active' ) )
    item.classList.add( 'active' )
}

const clickRemove = arrayElements => {
    arrayElements.forEach( i => {
        i.addEventListener( 'click', function(e){
            e.preventDefault()
            navAction( this ,arrayElements )
        }, false )
    } )
}

const profileMenu = () => {
    let profile     = document.querySelector( '.profile' ),
        menu_user   = profile.getElementsByClassName( 'menu_user' )[ 0 ],
        childrenLi = Array.from( menu_user.getElementsByTagName( 'li' ) )

    profile.addEventListener( 'click', function( e ){
         this.classList.toggle( 'active' )
         menu_user.classList.toggle( 'active' )
    }, false )
    window.addEventListener( 'click', function( e ) {
        if(
            profile.classList.contains( 'active' ) &&
            menu_user.classList.contains( 'active' ) &&
            e.target !== profile &&
            e.target !== menu_user &&
            e.target !== document.querySelector( '.name_profile' )
            ){
                profile.classList.toggle( 'active' )
                menu_user.classList.toggle( 'active' )
        }
    }, false )  
    clickRemove( childrenLi )
}