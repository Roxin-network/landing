import { FeatureDetailPage, detailMetadata } from "@/components/feature-detail-page";
import { featureDetails } from "@/lib/content";

const detail = featureDetails["reception"];
export const metadata = detailMetadata(detail);
export default function Page() { return <FeatureDetailPage detail={detail} />; }
