import { useRouter } from "next/router";

function Review() {
  const router = useRouter();
  const { matterSlug, dataId } = router.query;
  return (
    <h1>
      Matter IF for co2 of {matterSlug} of data point {dataId}
    </h1>
  );
}

export default Review;
