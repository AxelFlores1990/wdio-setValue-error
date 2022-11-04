export const explorerProjectsSection = {
  elem: '//div[@aria-label="No Folder Opened Section"]',
  openFolderButton:
    '//div[@aria-label="No Folder Opened Section"]/following-sibling::div[@class="pane-body welcome"]/div/div/div/div[@class="button-container"]/a',
};

export const quickInputHeader = {
  elem: '//div[@class="quick-input-header"]',
  openFolderExplorerTextbox:
    '//div[@class="quick-input-header"]//div[@class="quick-input-and-message"]/div/div/div/div[contains(@class, "monaco-inputbox idle")]/div/input',
  openFolderExplorerButton: '//div[@class="quick-input-action"]/a',
};
