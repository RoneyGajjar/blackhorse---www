import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Button } from "./buttons";
export default function MyApp() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "15min" });
            cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])
    return <Button variant="primary"
        data-cal-namespace="15min"
        data-cal-link="black-horse-associates-yce8pc/15min"
        data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'>Schedule a Consultation</Button>;
};