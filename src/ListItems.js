const item = new PortalItem({
    id: "5a5147abe878444cbac68dea9f2f64e7",
    portal: "https://www.arcgis.com/sharing/rest"
  });
  item.load().then((response)=>{
    console.log(response);
  });

  const portal = new Portal({
    url: "https://www.arcgis.com/",
    authMode: "immediate"
  });

  // OR
  esriConfig.apiKey = "AAPT3NKHt6i2urmWtqOuugvr9eL8U25EUQNz4LZ4e6kv6p2FGN7j9Uep1TCDyi0ew_RuXtU75li-sqzSnagCO20KsHYD7JhItmwZdgAbxlc2Qts7ndiidAFZXOqJPcwgehQcq_xpKLATTEB9ya5PMHA24F_oLLMYhr72GYKl5RbF4O-IW5yHwHLIFNOuZAKka4Rb3nJQcXpPiL8LD44fkM3cwqa1BFzVTNa11ROKKUsxCKg." // Scoped to access item below

  const portalItem = new PortalItem({
    portal: portal,
    id: "307a0cc2298d4b5895a92d85b29036a0"
  });
  portalItem.load().then((response)=>{
    console.log(response);
  });