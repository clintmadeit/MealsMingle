import React, { useState } from "react";
import styled from "styled-components";
import WebView from "react-native-webview";
import { Platform, View } from "react-native";

import { Text } from "../typography/text.component";
import { RestaurantInfoCard } from "../../features/restaurants/components/restaurant-info-card.component";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebImage = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  const [webViewFailed, setWebViewFailed] = useState(false);

  if (isAndroid && webViewFailed) {
    // Fallback to full RestaurantInfoCard when WebView fails on Android
    return <RestaurantInfoCard restaurant={restaurant} />;
  }

  const Image = isAndroid && isMap ? CompactWebImage : CompactImage;

  return (
    <Item>
      <Image
        source={{ uri: restaurant.photos[0] }}
        onError={() => isAndroid && setWebViewFailed(true)}
      />
      <Text center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};
