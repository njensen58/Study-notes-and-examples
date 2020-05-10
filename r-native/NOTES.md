# All notes: 
  *https://kadikraman.github.io/react-native-v2/*

# Expo
  * npm install -g expo-cli@3
  - expo init app-name
    - select boilerplate
  - npm run start


# Debuggin
  * shake the device while you are viewing to open it.
  * Open js debug
  * `console.warn` gives yellow on screen message
  * `console.error` gives full page error report.

# Basic Components
  * <View> - div
    * basic props: *https://reactnative.dev/docs/view-style-props*
  * <Text> - any text
    * basic props: *https://reactnative.dev/docs/text-style-props*
  * <ScrollView> - a div that allows scrolling when you dont need a list, (since list components auto scroll)
  * <SafeAreaView> - makes sure content is placed in good viewable areas per device
  * <Image>
    * basic props: *https://reactnative.dev/docs/image-style-props*


# Styling 
  * All styles are done inline by making stylesheet objects.
  * No shorthand padding: 10px 20px;
    * instead you have `paddingVertical` and `paddingHorizontal`.
    * Same with margin.
  * Must name border properties separately.
  * All positioning is done through `flexbox`.
    * Everything is display: flex by default.
  * flex: 1 - is like saying height: 100vh, and all
    components needing this need this property up the component tree.
  * If you need to add more than one style object, you can give the `styles` prop and array.
    * ex: <View styles={[styles.container, styles.header]}>
  * STYLED COMPONENTS WORKS IN NATIVE!!!!
    * npm install styled-components
    * ` const Container = styled.View`` `
  

# Lists and Components
  * In native you should NEVER use .map() to render a list due to performance.
    * Native systems will render every single thing on the screen, so if you had an array of 100
      items it will render them every time there is a re-render.
  * There are 2 components to render lists:
    * <FlatList>
      * Docs: *https://reactnative.dev/docs/flatlist*
      * Needs 3 props: 
        * `data`: the list of items you wish to render
        * `renderItem`: the function you give <FlatList> so it knows how to render each item.
          * renderItem gives you a function with a `data` prop that has a `.item` representing every item in the list.
        * `keyExtractor`: a function that gets passed an item and it's index
    * <SectionList>
      * Docs: *https://reactnative.dev/docs/sectionlist*
      * Needed props:
        * `data`: the array of objects to render
        * `renderItem`: the function you give so it knows what to render with each list item
        * `renderSection`: the function give so it knows what to render for each sublist header
        * `keyExtractor`: same as FlatList
      * SectionList requires an array of objects as its data
  * Both FlatList and SectionList are optimized for the web and will only load the items in the view!
  * `keyExtractor` doesn't have to be used if the array of objects already has a `.key` that is a `String`.
    

# Navigation
  * No navigation built in, you must download a library
    * We'll use `react-navigation` as its an expo default. `react-native-navigation` includes
      native code that wont work with expo, so you'd have to eject to use it.
    * Both are equally performant

    * First install the navigation library
      * `npm install @react-navigation/native`
      * `npm install @react-navigation/stack` - if you need stack navigation
    * Second install the expo-compatible dependencies
      * `expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view`

  * Two types of navigation, `Home` and `Stack`.
    * Home is like the bottom nav when the app launches, meaning all pages linked in that nav are loaded
      on load of the app (think about expensive data fetching and maybe don't include that page in the home nav)
    * Stack navigation is navigating inside of a page, loaded when requested.
  
  * With React navigation, it creates a nice header bar so you don't need to wrap stuff in a <SafeAreaVeiw>


# Touchable Components (button equivalent for native)
  * <TouchableOpacity> : The wrapped component has opacity applied when touch is in progress
  * <TouchableHighlight> : The wrapped component darkens when touch is in progress
  * <TouchableWithoutFeedback> : no visual feedback
  * <TouchableNativeFeedback> : (Android Only) adds Android-style touch feedback


# Hooks
  * The same as regular React, woot!


# Pull to Refresh
  * This is built into react native components with a `refreshControl` prop that takes a <RefreshControl/> component you
    can custom wrap, or a `refreshing` and `onRefresh` props that do it separately/default.
    * Components that take this prop are: <ScrollView>, <FlatList>, and <SectionList>
  

# Forms - we gotta track this ourselves
  * Components
    * <TextInput> : most used, extremely powerful
      * Props:
        - style
        - value = ties to state var
        - onChangeText = onChange
        - placeholder
        - keyboardType = sets the input type (numeric, default, number-pad, decimal-pad, email-address, phone-pad)
        - secureTextEntry = masks text
        - multiline - whether or not multiple lines is allowed
        - numberOfLines = how many lines are allowed
    * <Picker> : Looks very different on different devices 
      * Like a select option dropdown
    * <Switch> : Like a toggle! similar to checkbox

  * Check out react-community github to get custom components, like date pickers.



  * Things to Know:
    * You have to track each input individually as the `event` is just the text being sent in.