package com.e.d.model.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.e.d.model.entity.CommentEntity;

@Repository
public interface CommentRepository extends JpaRepository<CommentEntity, Long> {
	List<CommentEntity> findByCommentVideoOrderByCommentIdDesc(long commentVideo);

	void deleteByCommenterUserid(long commenterUserid);

	Optional<CommentEntity> findByCommentVideo(long commentVideo);

	long countByCommenterUserid(long CommenterUserid);
	
	List<CommentEntity> findByCommenterUserid(long commenterUserid);
	
	List<CommentEntity> findByCommentUserid(long commentUserid);
}
