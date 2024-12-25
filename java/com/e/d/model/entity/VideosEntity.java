package com.e.d.model.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "WHYNOT_VIDEOS")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class VideosEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "video_id", nullable = false)
	private long videoId;
	
	@Column(name = "creator", nullable = false)
	private String creator;
	
	@Column(name = "creator_val", nullable = false)
	private long creatorVal;
	
	@Column(name = "title", nullable = false)
	private String title;
	
	@Lob
	@Column(name = "more")
	private String more;
	
	@Column(name = "datetime", nullable = false)
	private String datetime;
	
	@Column(name = "views")
	private long views;
	
	@Column(name = "likes")
	private long likes;
	
	@Column(name = "unlikes")
	private long unlikes;
	
	@Column(name = "comment_count")
	private long commentCount;
	
}