//full grid:

<div style={{ display: "grid", gridTemplateColumns: "40% auto", gap: "20px" }}>
      <div>
        <div style={{ display: "grid", gridTemplateColumns: "48% 48%", gap: "20px", marginBottom: "20px" }}>
          <ImageUpload setImageURL={setImageURL} setImageDimensions={setImageDimensions} />
          <UploadDragger setData={setData} />
        </div>
        <ConfigCards
          imagePositions={imagePositions}
          chartHeight={imageDimensions.height}
          setImagePositions={setImagePositions}
          chartWidth={imageDimensions.width}
          setImgSize={setImgSize}
          imgSize={imgSize}
          chartSize={chartSize}
          setChartSize={setChartSize}
        />
      </div>
      <div>
        <Graphic
          data={data}
          imageURL={imageURL}
          imageDimensions={imageDimensions}
          imagePositions={imagePositions}
          imgSize={imgSize}
          chartSize={chartSize}
        />
      </div>
    </div>

//full flex:

<div style={{ display: "flex", gap: "20px" }}>
  <div style={{ width: "40%" }}>
    <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
      <ImageUpload setImageURL={setImageURL} setImageDimensions={setImageDimensions} />
      <UploadDragger setData={setData} />
    </div>
    <ConfigCards
      imagePositions={imagePositions}
      chartHeight={imageDimensions.height}
      setImagePositions={setImagePositions}
      chartWidth={imageDimensions.width}
      setImgSize={setImgSize}
      imgSize={imgSize}
      chartSize={chartSize}
      setChartSize={setChartSize}
    />
  </div>
  <div style={{ flex: 1 }}>
    <Graphic
      data={data}
      imageURL={imageURL}
      imageDimensions={imageDimensions}
      imagePositions={imagePositions}
      imgSize={imgSize}
      chartSize={chartSize}
    />
  </div>
</div>

//misto:

    <div style={{ display: "grid", gridTemplateColumns: "40% auto", gap: "20px" }}>
      <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
        <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
          <ImageUpload setImageURL={setImageURL} setImageDimensions={setImageDimensions} />
          <UploadDragger setData={setData} />
        </div>
        <ConfigCards
          imagePositions={imagePositions}
          chartHeight={imageDimensions.height}
          setImagePositions={setImagePositions}
          chartWidth={imageDimensions.width}
          setImgSize={setImgSize}
          imgSize={imgSize}
          chartSize={chartSize}
          setChartSize={setChartSize}
        />
      </div>
      <Graphic
        data={data}
        imageURL={imageURL}
        imageDimensions={imageDimensions}
        imagePositions={imagePositions}
        imgSize={imgSize}
        chartSize={chartSize}
      />
      {/* <ApexChart data={data} /> */}
    </div>
