import React from "react";
import { CollapsibleItem, Icon, Collapsible } from "react-materialize";

export default function About() {
    return (
        <Collapsible accordion>
            <CollapsibleItem
                expanded={false}
                header="The Film"
                icon={<Icon>local_movies</Icon>}
                node="div"
            >
                Here you can see the film card, which consistits of over 9 movie
                from every nation.
            </CollapsibleItem>
            <CollapsibleItem
                expanded
                header="Nation"
                icon={<Icon>location_on</Icon>}
                node="div"
            >
                USA, Korea.
            </CollapsibleItem>
            <CollapsibleItem
                expanded={false}
                header="Daily news"
                icon={<Icon>whatshot</Icon>}
                node="div"
            >
                News
            </CollapsibleItem>

            
        </Collapsible>
    );
}