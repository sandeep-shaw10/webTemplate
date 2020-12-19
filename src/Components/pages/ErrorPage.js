import React from 'react'

function ErrorPage(){
    return(
        <>
        <div className="errorPage">
            <h1 className="errorHead">ERROR PAGE 404</h1>
            <div  className="errorImg">
                <img src="https://raw.githubusercontent.com/sandeep-shaw10/reactweb/master/src/Images/search.svg" alt="ERROR 404"/>
            </div>
            <h3 className="errorSub">SORRY THIS PAGE IS UNAVAILABLE !</h3>
        </div>

        </>
    )
}

export default ErrorPage;