async function toggleColorScheme() {
  const setting = await browser.browserSettings.overrideContentColorScheme.get({});
  const currentValue = setting.value;
  
  let newValue;
  if (currentValue === "dark") {
    newValue = "light";
  } else {
    newValue = "dark";
  }
  
  await browser.browserSettings.overrideContentColorScheme.set({
    value: newValue
  });
  
  browser.storage.local.set({ colorScheme: newValue });
}

browser.browserAction.onClicked.addListener(toggleColorScheme);