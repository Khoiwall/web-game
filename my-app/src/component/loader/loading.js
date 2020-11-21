import { useLoading, Audio } from '@agney/react-loading';
import '../asset/css/loading.css'

function Loading() {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Audio width="50" />,
  });

  return (
    <div className="loading-page">
        <section {...containerProps}>
            {indicatorEl}    
        </section>
    </div>
  );
}

export default Loading