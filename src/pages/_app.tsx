import '../../public/styles/globals.css'
import 'antd/dist/antd.css'
import type { AppProps } from 'next/app'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import configureStore from 'saga/configureStore'

const store = configureStore.setup()
function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}

export default App
