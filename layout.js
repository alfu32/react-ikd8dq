import React from 'react';
import './entities.less';

import { ComponentWrapper,MultislotTransclusionComponent } from './lib/component.base.jsx'

export class AppTitle extends ComponentWrapper { }
export class AppSidebar extends ComponentWrapper { }
export class AppToolbar extends ComponentWrapper { }
export class AppContent extends ComponentWrapper { }
export class AppStatusbar extends ComponentWrapper { }
export class AppLayout extends MultislotTransclusionComponent{
    /** order counts */
    static classes = [AppTitle, AppSidebar, AppToolbar, AppContent, AppStatusbar]
}
export default ({ name }) => <h1>Hello {name}!</h1>;
