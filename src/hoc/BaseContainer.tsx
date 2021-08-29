import { makeStyles, ThemeProvider } from '@material-ui/styles'
import * as React from 'react'
import { connect } from 'react-redux'
import { RootState } from 'redux/rootReducer'
import { bindActionCreators, compose } from "redux";
import { createTheme, CssBaseline, Switch, Theme } from '@material-ui/core';
import { deepOrange, deepPurple, lightBlue, orange } from '@material-ui/core/colors';
import { useReducer } from 'react';

export interface BaseContainerProps {
    darkTheme: boolean
}

export interface BaseContainerState {
    darkTheme?: boolean
}

const drawerWidth = 240;

const BaseContainer = (Component: any, options: {}) => function Comp(props: BaseContainerProps) {


    //const [appState] = useReducer(appReducer, initialAppState);



    const useStyles = makeStyles((theme: Theme) => ({
        root: {
            width: "100%",
            height: "100%",
            zIndex: 1,
            overflow: "hidden",
        },
        appFrame: {
            position: "relative",
            display: "flex",
            width: "100%",
            height: "100%",
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            position: "absolute",
        },
        navIconHide: {
            [theme.breakpoints.up("md")]: {
                display: "none",
            },
        },
        drawerHeader: theme.mixins.toolbar,
        drawerPaper: {
            width: 250,
            backgroundColor: theme.palette.background.default,
            [theme.breakpoints.up("md")]: {
                width: drawerWidth,
                position: "relative",
                height: "100%",
            },
        },
        content: {
            backgroundColor: theme.palette.background.default,
            width: "100%",
            height: "calc(100% - 56px)",
            marginTop: 56,
            [theme.breakpoints.up("sm")]: {
                height: "calc(100% - 64px)",
                marginTop: 64,
            },
        },
    }))


    console.log('dark teememmememe', props)
    //const classes = useStyles()

    const palletType = props.darkTheme ? "dark" : "light";
    const mainPrimaryColor = props.darkTheme ? orange[500] : lightBlue[500];
    const mainSecondaryColor = props.darkTheme ? deepOrange[900] : deepPurple[500];
    const darkTheme = createTheme({
        palette: {
            type: palletType,
            primary: {
                main: mainPrimaryColor
            },
            secondary: {
                main: mainSecondaryColor
            }
        }
    })

    return (
        <div>
            <style>{`html, body, .row { height: 100%; overflow-y:hidden }`}</style>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <Component {...props} />

            </ThemeProvider>
        </div >
    )





    // switch (template) {
    //     case 1:
    //         return (

    //             <div>
    //                 {/* <style>{`html, body, .row { color: ${themeObject.color}; height: 100%; overflow-y:hidden }`}</style>							 */}
    //                 <style>{`html, body, .row { font-family: Montserrat; height: 100%; overflow-y:hidden; overflow-x:hidden }`}</style>
    //                 <ThemeProvider theme={themeObject}>
    //                     <Height100>
    //                         {navbar &&
    //                             <div></div>
    //                             // <NavbarComponent 
    //                             // 	isAuth={isAuth}
    //                             // 	theme={theme}
    //                             // 	user={user}
    //                             // 	intlActions={intlActions}
    //                             // 	userActions={userActions}
    //                             // 	themeActions={themeActions}
    //                             // 	locale={locale} 
    //                             // 	messages={messages} 
    //                             // />
    //                         }

    //                         <ComposedComponent
    //                             //setArrayModels={this.setArrayModels}
    //                             renderModelsLoaded={this.renderModelsLoaded}
    //                             deleteArrayModel={this.deleteArrayModel}
    //                             {...this.props} />

    //                     </Height100>
    //                 </ThemeProvider>

    //             </div>
    //         )
    //     case 2:
    //         return (
    //             <div>
    //                 <style>{`html, body, .row { height: 100%; overflow-y:hidden }`}</style>
    //                 <ThemeProvider theme={themeObject}>
    //                     <ComposedComponent {...this.props} />
    //                 </ThemeProvider>
    //             </div>
    //         )
    // }


}

const mapStateToProps = (state: RootState) => ({
    darkTheme: state.app.darkTheme
} as BaseContainerProps)

const mapDispatchToProps = (dispatch: any) => {
    return {
        //actions: bindActionCreators(AuthActions as any, dispatch),
    }
}


//export default connect(mapStateToProps, mapDispatchToProps)(BaseContainer)

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose<any>(withConnect, BaseContainer)

