from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from config import Config

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    mongo = PyMongo(app)

    @app.route("/tasks/<int:task_id>/comments", methods=["POST"])
    def add_comment(task_id):
        data = request.get_json()
        if not data or "content" not in data:
            return jsonify({"error": "Content is required"}), 400

        comment = {
            "task_id": task_id,
            "content": data["content"]
        }

        result = mongo.db.comments.insert_one(comment)

        return jsonify({
            "id": str(result.inserted_id),
            "task_id": task_id,
            "content": data["content"]
        }), 201

    @app.route("/tasks/<int:task_id>/comments", methods=["GET"])
    def get_comments(task_id):
        comments = mongo.db.comments.find({"task_id": task_id})
        return jsonify([
            {
                "id": str(c["_id"]),
                "task_id": c["task_id"],
                "content": c["content"]
            } for c in comments
        ]), 200

    @app.route("/comments/<comment_id>", methods=["PUT"])
    def update_comment(comment_id):
        data = request.get_json()
        result = mongo.db.comments.update_one(
            {"_id": ObjectId(comment_id)},
            {"$set": {"content": data.get("content")}}
        )

        if result.matched_count == 0:
            return jsonify({"error": "Comment not found"}), 404

        return jsonify({"message": "Comment updated"}), 200

    @app.route("/comments/<comment_id>", methods=["DELETE"])
    def delete_comment(comment_id):
        result = mongo.db.comments.delete_one(
            {"_id": ObjectId(comment_id)}
        )

        if result.deleted_count == 0:
            return jsonify({"error": "Comment not found"}), 404

        return jsonify({"message": "Comment deleted"}), 200

    return app

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)
