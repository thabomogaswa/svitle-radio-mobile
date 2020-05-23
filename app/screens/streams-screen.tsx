import * as React from "react"
import { observer, useObserver } from "mobx-react-lite"
import { TouchableOpacity, Text, View, StyleSheet } from "react-native"
import { ParamListBase } from "@react-navigation/native"
import { NativeStackNavigationProp } from "react-native-screens/native-stack"
import { Screen, FooterLink } from "../components"
import i18n from "i18n-js"
import { useStores } from "../models/root-store"
import { colors } from "../theme"
import PlayButton from "../images/button.play.svg"
import PauseButton from "../images/button.pause.svg"
import SvetloeLogo from "../images/svetloe.svg"
import SvitleLogo from "../images/svitle.svg"

export interface StreamsScreenProps {
  navigation: NativeStackNavigationProp<ParamListBase>
}

export const StreamsScreen: React.FunctionComponent<StreamsScreenProps> = observer((props) => {
  const { preferencesStore } = useStores()
  return useObserver(() => (
    <Screen title={i18n.t("streams_screen.title")}>
      <View style={styles.selector}>
        <TouchableOpacity style={[styles.stream, styles.streamSelected]}>
          <View style={styles.streamContainer}>
            <PauseButton style={styles.streamButton} height={80} fill={colors.primary} />
            <SvetloeLogo style={styles.streamLogo} height={80} />
            <Text style={styles.streamText}>{i18n.t("streams_screen.radios.svetloe")}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.stream}>
          <View style={styles.streamContainer}>
            <PlayButton style={styles.streamButton} height={80} fill={colors.primary} />
            <SvitleLogo style={styles.streamLogo} height={80} />
            <Text style={styles.streamText}>{i18n.t("streams_screen.radios.svitle")}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.stream}>
          <View style={styles.streamContainer}>
            <PlayButton style={styles.streamButton} height={80} fill={colors.primary} />
            <SvetloeLogo style={styles.streamLogo} height={80} />
            <Text style={styles.streamText}>{i18n.t("streams_screen.radios.kids")}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <FooterLink url={preferencesStore.preferences.url_archive}
          icon="archive" text="streams_screen.archive"/>
        <FooterLink url={preferencesStore.preferences.url_youtube}
          icon="video" text="streams_screen.youtube"/>
      </View>
    </Screen>
  ))
})

const styles = StyleSheet.create({
  selector: {
    flexDirection: "column",
    width: "100%",
    flex: 5,
  },
  stream: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  streamContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  streamButton: {
    maxHeight: "21%",
  },
  streamLogo: {
    margin: 10,
    maxHeight: "25%",
  },
  streamText: {
    fontSize: 16,
    color: colors.text,
  },
  streamSelected: {backgroundColor: colors.menuBackgroundActive},
  footer: {
    width: "100%",
    flex: 0.8,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
})