function LinkButton({ linkUrl, linkText, target = "_blank" }) {


    return (
  <div class="container py-2 px-10 mx-0 min-w-full flex flex-col items-center">
      <form action={linkUrl} method="get" target={target}>
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full">
        {linkText}
              </button>
      </form>
    </div>
    );
  }

export default LinkButton