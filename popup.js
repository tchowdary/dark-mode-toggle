document.addEventListener('DOMContentLoaded', async () => {
  const setting = await browser.browserSettings.overrideContentColorScheme.get({});
  const currentValue = setting.value;
  
  document.querySelector(`input[value="${currentValue}"]`).checked = true;
  
  document.querySelectorAll('input[name="mode"]').forEach(radio => {
    radio.addEventListener('change', async (e) => {
      await browser.browserSettings.overrideContentColorScheme.set({
        value: e.target.value
      });
      browser.storage.local.set({ colorScheme: e.target.value });
    });
  });
});