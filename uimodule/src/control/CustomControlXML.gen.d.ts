import { $ControlSettings } from "sap/ui/core/Control";

declare module "./CustomControlXML" {

    /**
     * Interface defining the settings object used in constructor calls
     */
    interface $CustomControlXMLSettings extends $ControlSettings {
        properties?: string;
    }

    export default interface CustomControlXML {

        // property: properties
        getProperties(): string;
        setProperties(properties: string): this;
    }
}
