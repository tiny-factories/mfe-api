import { useRouter } from "next/router";

function Review() {
  const router = useRouter();
  const { matterSlug, dataId } = router.query;
  return (
    <h1>
      {matterSlug} cat of data point {dataId}
    </h1>
  );
}

export default Review;
