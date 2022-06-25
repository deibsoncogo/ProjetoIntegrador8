import React from "react";
import { Text, View } from "react-native";
import { styles } from "./style";

export type IIllnessCase = {
  id: number,
  name: string;
  prevention: string;
  casesTotal: number,
  casesMap: string
}

type IProps = {
  data: IIllnessCase;
}

export function IllnessCase({ data }: IProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.textName}>
        Doença: <Text style={styles.textDescription}>{data.name}</Text>
      </Text>

      <Text style={styles.textName}>
        Prevenção: <Text style={styles.textDescription}>{data.prevention}</Text>
      </Text>

      <Text style={styles.textName}>
        Casos: <Text style={styles.textDescription}>{data.casesTotal}</Text>
      </Text>

      <Text style={styles.textName}>
        Bairros / Casos: <Text style={styles.textDescription}>{data.casesMap}</Text>
      </Text>
    </View>
  );
}
