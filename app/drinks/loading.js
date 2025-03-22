const loading = () => {
  return (
    <div className="tab-content border-base-300 overflow-x-auto">
      <div
        className="preview relative flex min-h-[12rem] max-w-6xl min-w-[24rem] flex-wrap 
                  items-center justify-center gap-6 overflow-x-hidden p-6 xl:py-16">
        <span
          className="loading loading-ring"
          style={{ width: 30, height: 30 }}></span>
        <span
          className="loading loading-ring"
          style={{ width: 50, height: 50 }}></span>
        <span
          className="loading loading-ring"
          style={{ width: 70, height: 70 }}></span>
        <span
          className="loading loading-ring"
          style={{ width: 90, height: 90 }}></span>
        <span
          className="loading loading-ring"
          style={{ width: 110, height: 110 }}></span>
      </div>
    </div>
  )
}

export default loading
