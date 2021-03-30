import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer,
  PlaceholderContent,
  PlaceholderName
} from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';

import * as strings from 'FooterCustomizerApplicationCustomizerStrings';
import styles from './AppCustomizer.module.scss';
import { Footer } from './Footer';


const LOG_SOURCE: string = 'FooterCustomizerApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IFooterCustomizerApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class FooterCustomizerApplicationCustomizer
  extends BaseApplicationCustomizer<IFooterCustomizerApplicationCustomizerProperties> {
    private _topPlaceholder: PlaceholderContent | undefined;
    private _bottomPlaceholder: PlaceholderContent | undefined;

  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);
  
    // Wait for the placeholders to be created (or handle them being changed) and then
    // render.
    this.context.placeholderProvider.changedEvent.add(this, this._renderPlaceHolders);
  
    return Promise.resolve<void>();
  }
  private _renderPlaceHolders(): void {
    console.log("HelloWorldApplicationCustomizer._renderPlaceHolders()");
    console.log(
      "Available placeholders: ",
      this.context.placeholderProvider.placeholderNames
        .map(name => PlaceholderName[name])
        .join(", ")
    );
  
    // Handling the top placeholder
    // if (!this._topPlaceholder) {
    //   this._topPlaceholder = this.context.placeholderProvider.tryCreateContent(
    //     PlaceholderName.Top,
    //     { onDispose: this._onDispose }
    //   );
  
    //   // The extension should not assume that the expected placeholder is available.
    //   if (!this._topPlaceholder) {
    //     console.error("The expected placeholder (Top) was not found.");
    //     return;
    //   }
  
    //   if (this.properties) {
    //     let topString: string = this.properties.Top;
    //     if (!topString) {
    //       topString = "(Top property was not defined.)";
    //     }
  
    //     if (this._topPlaceholder.domElement) {
    //       this._topPlaceholder.domElement.innerHTML = `
    //       <div class="${styles.app}">
    //         <div class="${styles.top}">
    //           <div id="Header" style='width:100%'>
    //           </div>
    //         </div>
    //       </div>`;
    //     }
    //     let navBar=new NavigationBar({});
    //     navBar.callRender();
    //   }
    // }
  
    // Handling the bottom placeholder
    if (!this._bottomPlaceholder) {
      this._bottomPlaceholder = this.context.placeholderProvider.tryCreateContent(
        PlaceholderName.Bottom,
        { onDispose: this._onDispose }
      );
  
      // The extension should not assume that the expected placeholder is available.
      if (!this._bottomPlaceholder) {
        console.error("The expected placeholder (Bottom) was not found.");
        return;
      }
  
      if (this.properties) {
  
        if (this._bottomPlaceholder.domElement) {
          this._bottomPlaceholder.domElement.innerHTML = `
          <div class="${styles.app}">
              <div id="FooterPart">
              </div>
          </div>`;
        let footerObj=new Footer({});
        footerObj.callRender();
        }
      }
    }
  }
  private _onDispose(): void {
    console.log('[HelloWorldApplicationCustomizer._onDispose] Disposed custom top and bottom placeholders.');
  }
}
