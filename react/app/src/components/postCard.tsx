


const PostCard = () => {
    return (
      <>
        <div className="flame">
            <div className="content">
              title
            </div>

        </div>
        <style>{`
          .flame {
            display: flex;
            max-width: 630px;
            height: 109px;
            width: 630px;
            border-radius: 24px;
            background-color: rgba(232, 228, 230, 1);
          }
          .content {
            margin: 10px;
          }
        `}</style>
      </>
    );
  }

  export default PostCard;