/*
import Portal from "@arcgis/core/portal/Portal";

const listItems = async () => {
    const portal = new Portal();
    portal.authMode = "immediate";
    await portal.load();

    const queryParams = {
        query: `owner:${portal.user.username}`,
        sortField: "title",
        sortOrder: "asc",
        num: 20,
    };

    const results = await portal.queryItems(queryParams);
    console.log("User's Items:", results)
};

listItems();*/